import React from "react";
import StoreList from "./StoreList";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Store = () => {
    return (
        <div>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Stores
                    </h2>
                }
            >
                <StoreList />
            </AuthenticatedLayout>
        </div>
    );
};

export default Store;
