import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
type Props = {
    head: string;
    children: React.ReactNode;
    submit?: () => void;
};

const ModalLayout = ({ head, children, submit }: Props) => {
    const close = () => {
        console.log("close");
    };
    return (
        <div>
            <div className="flex justify-between">
                <h1>{head}</h1>
                <IconButton onClick={close}>
                    <CloseIcon />
                </IconButton>
            </div>
            <div>{children}</div>
            <div>
                <button onClick={submit}>Submit</button>
            </div>
        </div>
    );
};

// const ModalLayout = ({ head, children }: Props) => {
//     const close = () => {
//         console.log("close");
//     };
//     return (
//         <div>
//             <div className="flex justify-between">
//                 <h1>{head}</h1>
//                 <IconButton onClick={close}>
//                     <CloseIcon />
//                 </IconButton>
//             </div>
//             <div>{children}</div>
//         </div>
//     );
// };

export default ModalLayout;
