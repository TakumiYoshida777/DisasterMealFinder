import * as React from "react";
import Button from "@mui/material/Button";
import TextField, { TextFieldVariants } from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export type FormList = {
    required?: boolean;
    autoFocus?: boolean;
    margin?: "dense" | "none" | "normal";
    id: number;
    name: string;
    label: string;
    type: string;
    fullWidth?: boolean;
    variant?: TextFieldVariants;
};

type Props = {
    title: string;
    formList: FormList[];
    buttonLabel: string;
};

export default function FormDialog({ buttonLabel, title, formList }: Props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                {buttonLabel}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: "form",
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(
                            (formData as any).entries()
                        );
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        登録する店舗情報を入力してください
                        <br />
                        Please enter the store information to register
                    </DialogContentText>
                    <div className="px-3">
                        {formList.map((form) => (
                            <TextField
                                key={form.id}
                                required={form.required ?? true}
                                autoFocus={form.autoFocus ?? true}
                                margin={form.margin ?? "dense"}
                                id={form.name}
                                name={form.name}
                                label={form.label}
                                type={form.type ?? "text"}
                                fullWidth={form.fullWidth ?? true}
                                variant={form.variant ?? "standard"}
                            />
                        ))}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
