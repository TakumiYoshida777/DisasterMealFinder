import TableMui from "@/Components/TableMui";
import { StoreListProps } from "./types";
import { Button } from "@mui/material";

type Props = {
    data: StoreListProps[];
    thead?: string[];
};

const StoreList = ({ data = [], thead }: Props) => {
    console.log(data, "datadata");

    if (data.length === 0) {
        //dataが空の場合
        data.forEach((item) => {
            //valueを全て空にする
            Object.keys(item).forEach((key) => {
                item[key] = "";
            });
        });
    } else {
        //dataが空でない場合
        data.forEach((item, index) => {
            // 最後にボタンを挿入
            item["button"] = <Button variant="contained">詳細</Button>;
        });
    }

    return (
        <div>
            <TableMui rows={data} thead={thead} />
        </div>
    );
};

export default StoreList;
