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
}

export interface StoreListProps {
    No: number;
    カテゴリー: string;
    店名: string;
    郵便番号: string;
    都道府県: string;
    電話番号: string;
    メールアドレス: string;
    作成日時: string;
    更新日時: string;
    [key: string]: string | number; // インデックスシグネチャの追加
}
