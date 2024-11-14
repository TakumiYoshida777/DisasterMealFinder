import TableMui from "@/Components/TableMui";
import { StoreListProps } from "./types";

type Props = {
    data: StoreListProps[];
};

const StoreList = ({ data = [] }: Props) => {
    if (data.length === 0) {
        return (
            <div>
                <TableMui
                    rows={[
                        {
                            No: 0,
                            カテゴリー: "No data",
                            店名: "No data",
                            郵便番号: "No data",
                            都道府県: "No data",
                            電話番号: "No data",
                            メールアドレス: "No data",
                            作成日時: "No data",
                            更新日時: "No data",
                            "": "",
                        },
                    ]} // データがない場合は空のデータを表示
                />
            </div>
        );
    }

    return (
        <div>
            <TableMui rows={data} />
        </div>
    );
};

export default StoreList;
