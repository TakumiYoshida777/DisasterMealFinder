import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ModalLayout from "../Layouts/ModalLayout";
import FormDialog from "../Components/FormDialog";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <FormDialog></FormDialog>

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
