import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        "& .MuiTableCell-root": {
            border: '1px solid #e6e0df',
        },
    },


});


const Degreen = () => {
    const classes = useStyles();

    return (
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table" className={classes.table}>
                <TableHead>
                    <TableRow sx={{
                        "& th": {
                            color: "#fff",
                            backgroundColor: "#7467ef",
                        }
                    }}>
                        <TableCell
                            style={{ minWidth: "100px" }}
                            align="center"

                        >
                            Số thứ tự
                        </TableCell>
                        <TableCell
                            style={{ minWidth: "100px" }}
                            align="center"
                        >
                            Tên văn bằng
                        </TableCell>
                        <TableCell
                            style={{ minWidth: "80px" }}
                            align="center"
                        >
                            Ngày cấp
                        </TableCell>
                        <TableCell
                            style={{ minWidth: "80px" }}
                            align="center"
                        >
                            Nội dung văn bằng
                        </TableCell>
                        <TableCell
                            style={{ minWidth: "70px" }}
                            align="center"
                        >
                            Thao tác
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow hover role="checkbox" tabIndex={-1}>

                        <TableCell >
                            456
                        </TableCell>

                        <TableCell >
                            567
                        </TableCell>
                        <TableCell >
                            888
                        </TableCell>
                        <TableCell >
                            888
                        </TableCell>
                        <TableCell >
                            888
                        </TableCell>

                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Degreen