import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

type Props = {
    thead?: string[];
    rows: {
        [key: string]: string | number | React.ReactNode;
    }[];
};

export default function TableMui({ thead, rows }: Props) {
    if (rows.length === 0) {
        console.error("rows is empty");
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {thead
                            ? thead.map((value, index) => (
                                  <StyledTableCell key={index} align="left">
                                      {value}
                                  </StyledTableCell>
                              ))
                            : Object.keys(rows[0]).map((key) => (
                                  <StyledTableCell key={key} align="left">
                                      {key}
                                  </StyledTableCell>
                              ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <StyledTableRow key={rowIndex}>
                            {Object.values(row).map((value, index) => (
                                <StyledTableCell key={index} align="left">
                                    {value}
                                </StyledTableCell>
                            ))}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
