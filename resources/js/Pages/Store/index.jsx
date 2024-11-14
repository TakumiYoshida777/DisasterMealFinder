import React from "react";
import StoreList from "./StoreList";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@mui/material";
import FormDialog from "@/Components/FormDialog";

const Store = () => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Stores
                </h2>
            }
        >
            <div className="mb-4">
                <FormDialog
                    className="mb-4"
                    title="店舗情報|Store Information"
                    buttonLabel="店舗登録 | Register Store"
                    formList={[
                        {
                            id: "name",
                            type: "text",
                            label: "店舗名| Store Name",
                            name: "name",
                        },
                        {
                            id: "email",
                            type: "email",
                            label: "店舗のEメールアドレス|Stores Email Address",
                            name: "email",
                        },
                        {
                            id: "tel",
                            type: "tel",
                            label: "店舗の電話番号| Store Phone Number",
                            name: "tel",
                        },
                        {
                            id: "postal_code",
                            type: "text",
                            label: "店舗の郵便番号| Store Postal Code",
                            name: "postal_code",
                        },
                        {
                            id: "address",
                            type: "text",
                            label: "店舗の住所| Store Address",
                            name: "address",
                        },
                    ]}
                />
            </div>

            <StoreList />
        </AuthenticatedLayout>
    );
};

export default Store;
