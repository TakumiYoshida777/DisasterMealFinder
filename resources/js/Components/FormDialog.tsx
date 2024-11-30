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
    MenuItem,
} from "@mui/material";
import { route } from "ziggy-js";
import { usePage } from "@inertiajs/react";
import { CustomPageProps, User } from "@/Shared/types";

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
    phone: z
        .string()
        .regex(/^\d+$/, "数字のみ入力してください")
        .min(1, "電話番号は必須です"),
    first_postal_code: z.string().min(1, "郵便番号は必須です"),
    second_postal_code: z.string().min(1, "郵便番号は必須です"),
    address: z.string().min(1, "住所は必須です"),
});
type FormData = z.infer<typeof formSchema>;

export default function FormDialog({
    buttonLabel,
    title,
    formList,
    message,
}: Props) {
    // user_idはログインユーザーのIDを取得する
    const { auth }: CustomPageProps = usePage<CustomPageProps>().props;
    const user: User = auth.user;

    // ダイアログの開閉状態を管理
    const [open, setOpen] = React.useState(false);
    // ダイアログを開く
    const handleClickOpen = () => {
        setOpen(true);
    };
    // ダイアログを閉じる
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

        const submitData = {
            user_id: user.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
            first_postal_code: data.first_postal_code,
            second_postal_code: data.second_postal_code,
            address: data.address,
        };

        // ここでAPIリクエストを送信する
        try {
            const response = fetch(route("store.store"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submitData),
            });
            // 送信成功
            console.log("送信成功");
        } catch (error) {
            // 送信失敗
            console.error("送信失敗", error);
        }

        // 送信が成功したらダイアログを閉じる
        handleClose();
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
                                    select={form.type === "select"}
                                    fullWidth={form.fullWidth ?? true}
                                    variant={form.variant ?? "standard"}
                                    {...register(form.name)}
                                    error={!!errors[form.name]}
                                    helperText={errors[form.name]?.message}
                                ></TextField>
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
