import TableMui from "@/Components/TableMui";
import { StoreListProps } from "./types";

type Props = {
    data: StoreListProps[];
    thead?: string[];
};

const StoreList = ({ data = [], thead }: Props) => {
    console.log(data, "datadata");

    if (data.length === 0) {
        data.forEach((item) => {
            //valueを全て空にする
            Object.keys(item).forEach((key) => {
                item[key] = "";
            });
        });
    }

    return (
        <div>
            <TableMui rows={data} thead={thead} />
        </div>
    );
};

export default StoreList;
