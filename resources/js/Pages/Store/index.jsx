import React from "react";
import StoreList from "./StoreList";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@mui/material";

const Store = () => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Stores
                </h2>
            }
        >
            <Button variant="contained" color="primary">
                店舗登録
            </Button>
            <StoreList />
        </AuthenticatedLayout>
    );
};

export default Store;
