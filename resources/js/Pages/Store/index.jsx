import React from "react";
import StoreList from "./StoreList";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@mui/material";
import FormDialog from "@/Components/FormDialog";

const Store = () => {
    const storeData = [
        {
            id: 1,
            name: "Store 1",
            email: "test1@test.com",
            tel: "090-1234-5678",
            postal_code: "123-4567",
            address: "Tokyo",
        },
        {
            id: 2,
            name: "Store 2",
            email: "test2@test.com",
            tel: "090-1234-5678",
            postal_code: "123-4567",
            address: "Tokyo",
        },
    ];

    const thead = [
        "No",
        "店舗名",
        "メールアドレス",
        "電話番号",
        "郵便番号",
        "住所",
        "",
    ];
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

            <StoreList thead={thead} data={storeData} />
        </AuthenticatedLayout>
    );
};

export default Store;
