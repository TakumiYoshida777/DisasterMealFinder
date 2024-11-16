import { PageProps as InertiaPageProps } from "@inertiajs/core";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    password: string;
    role_id: number | null;
    remember_token: string | null;
    created_at: string;
    updated_at: string;
}

export interface CustomPageProps extends InertiaPageProps {
    auth: {
        user: User;
    };
    // Add other custom page properties as needed
}
