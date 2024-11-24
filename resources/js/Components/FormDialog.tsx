import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    TextField,
} from "@mui/material";
import InputError from "./InputError"; // 必要に応じてパスを修正してください

interface Props {
    buttonLabel: string;
    title: string;
    formList: Array<{
        id: string;
        name: keyof FormData;
        label: string;
        type?: string;
        required?: boolean;
        autoFocus?: boolean;
        margin?: "none" | "dense" | "normal";
        fullWidth?: boolean;
        variant?: "standard" | "outlined" | "filled";
    }>;
    message: string;
}

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

export default function FormDialog({
    buttonLabel,
    title,
    formList,
    message,
}: Props) {
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

    const onSubmit = (data: FormData) => {
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
                    <DialogContentText>{message}</DialogContentText>
                    <div className="px-3">
                        {formList.map((form) => (
                            <React.Fragment key={form.id}>
                                <TextField
                                    autoFocus={form.autoFocus ?? true}
                                    margin={form.margin ?? "dense"}
                                    id={form.name as string}
                                    label={form.label}
                                    type={form.type ?? "text"}
                                    fullWidth={form.fullWidth ?? true}
                                    variant={form.variant ?? "standard"}
                                    {...register(form.name)}
                                    error={!!errors[form.name]}
                                    helperText={errors[form.name]?.message}
                                />
                            </React.Fragment>
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
