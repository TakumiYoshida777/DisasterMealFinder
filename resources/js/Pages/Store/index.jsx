import React from "react";
import StoreList from "./StoreList";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FormDialog from "@/Components/FormDialog";
import { useSuspenseQuery } from "@tanstack/react-query";
import { route } from "ziggy-js";
import { usePage } from "@inertiajs/react";

const fetchStore = async () => {
    const response = await fetch(route("store.getAllStore"));
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
};
console.log(route("store.getAllStore"), "route");

const Store = () => {
    // usePageフックを使用してユーザー情報を取得
    const { auth } = usePage().props;
    const user = auth.user;
    console.log(user, "user");

    // Data fetch from API
    const { data, refetch, isLoading, error } = useSuspenseQuery({
        queryKey: ["store"], // queryKeyを配列に変更
        queryFn: fetchStore,
    });

    const [storeData, setStoreData] = React.useState(data.data);

    const thead = [
        "No",
        "店舗名",
        "メールアドレス",
        "電話番号",
        "郵便番号(3桁)",
        "郵便番号(4桁)",
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
                    message="店舗情報を入力してください | Please enter store information"
                    dropDownList={[
                        { value: "1", label: "飲食店| Restaurant" },
                        { value: "2", label: "カフェ| Cafe" },
                        { value: "3", label: "居酒屋| Izakaya" },
                        { value: "4", label: "その他| Others" },
                    ]}
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
                            id: "phone",
                            type: "phone",
                            label: "店舗の電話番号| Store Phone Number",
                            name: "phone",
                        },
                        {
                            id: "first_postal_code",
                            type: "text",
                            label: "店舗の郵便番号(3桁)| Store Postal Code",
                            name: "first_postal_code",
                        },
                        {
                            id: "second_postal_code",
                            type: "text",
                            label: "店舗の郵便番号(4桁)| Store Postal Code",
                            name: "second_postal_code",
                        },
                        {
                            id: "address",
                            type: "text",
                            label: "店舗の住所| Store Address",
                            name: "address",
                        },
                        // {
                        //     id: "category",
                        //     type: "select",
                        //     label: "カテゴリー| Store Category",
                        //     name: "category",
                        // },
                    ]}
                    onSuccess={refetch}
                    setStoreData={setStoreData}
                />
            </div>

            <StoreList thead={thead} data={storeData} />
        </AuthenticatedLayout>
    );
};

export default Store;
