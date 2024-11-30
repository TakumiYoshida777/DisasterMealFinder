import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import ModalLayout from "../Layouts/ModalLayout";
import FormDialog from "../Components/FormDialog";
import Modal from "../Components/Modal";
import { useQuery } from "@tanstack/react-query";

export default function Dashboard() {
    //TODO: sample code for usePage.props
    const { auth } = usePage().props;
    const user = auth.user;
    console.log(user, "user");

    //TODO: sample code for fetching data
    const { data, isLoading } = useQuery({
        queryKey: "dashboard",
        queryFn: async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        },
    });

    console.log(data, isLoading, "data", "isLoading");

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

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

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                            <ModalLayout head="test">
                                <div className="p-6">
                                    <h2 className="text-lg font-semibold leading-tight text-gray-800">
                                        Modal
                                    </h2>
                                    <p className="text-sm text-gray-600">
                                        This is a modal.
                                    </p>
                                </div>
                            </ModalLayout>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
