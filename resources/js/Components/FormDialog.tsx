import * as React from "react";
import Button from "@mui/material/Button";
import TextField, { TextFieldVariants } from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputError from "./InputError";

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
    message: string;
};

export default function FormDialog({
    buttonLabel,
    title,
    formList,
    message,
}: Props) {
    // Define the schema using zod
    const formSchema = z.object({
        name: z.string().min(1, "店舗名は必須です"),
        email: z.string().email("正しいメールアドレスを入力してください"),
        tel: z
            .string()
            .regex(/^\d+$/, "数字のみ入力してください")
            .min(1, "電話番号は必須です"),
        postal_code: z.string().min(1, "郵便番号は必須です"),
        address: z.string().min(1, "住所は必須です"),
    });
    type FormData = z.infer<typeof formSchema>;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    });
    const onSubmit = (data: any) => {
        console.log(data, "submit data");
        // handleClose();
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
                    onSubmit: handleSubmit(onSubmit),
                }}
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {/* 登録する店舗情報を入力してください
                        <br />
                        Please enter the store information to register */}
                        {message}
                    </DialogContentText>
                    <div className="px-3">
                        {formList.map((form) => (
                            <>
                                <TextField
                                    key={form.id}
                                    // required={form.required ?? true}
                                    autoFocus={form.autoFocus ?? true}
                                    margin={form.margin ?? "dense"}
                                    id={form.name}
                                    name={form.name}
                                    label={form.label}
                                    type={form.type ?? "text"}
                                    fullWidth={form.fullWidth ?? true}
                                    variant={form.variant ?? "standard"}
                                    {...register(
                                        form.name as
                                            | "name"
                                            | "email"
                                            | "tel"
                                            | "postal_code"
                                            | "address"
                                    )}
                                />
                                <InputError
                                    error={
                                        errors[form.name as keyof typeof errors]
                                    }
                                    message={errors[form.name]?.message}
                                />
                            </>
                        ))}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>キャンセル</Button>
                    <Button variant="contained" type="submit" color="primary">
                        登録
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
