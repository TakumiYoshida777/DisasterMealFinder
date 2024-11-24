import React from "react";

export interface StoreData {
    id: number | string;
    user_id: number | string;
    category_id: number | string;
    name: string;
    first_postal_code: string;
    second_postal_code: string;
    prefecture_code: string;
    address: string;
    building_name?: string;
    phone: string;
    email: string;
    website?: string;
    description: string;
    created_at: string;
    updated_at: string;
    button?: React.ReactNode;
}

export interface StoreListProps {
    [key: string]: any; // インデックスシグネチャを追加
    id: number | string;
    name: string;
    email: string;
    tel: string;
    postal_code: string;
    address: string;
    button?: React.ReactNode;
}
