import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import "./modalDegreeInfo .scss"
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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

const ModalDegreeInfo = () => {
    const classes = useStyles();

    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>

                <Grid item lg={20} sm={20} style={{ width: "950px" }} >
                    <Grid container item spacing={1}>
                        <Grid item xs={3}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Tên văn bằng"
                                // defaultValue="Hello World"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Xếp loại"
                                // defaultValue="Hello World"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Grid item xs={12} className='date_of_issue'>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="Chọn ngày cấp" />
                                    </DemoContainer>
                                </LocalizationProvider>

                            </Grid>
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Nội dung văn bằng"
                                // defaultValue="Hello World"
                                fullWidth
                            />
                        </Grid>

                    </Grid>


                </Grid>
                <div className='btn-save'>
                    <Button variant="contained" disableElevation style={{
                        backgroundColor: "#7467ef",

                    }}>
                        Lưu
                    </Button>
                    <Button variant="contained" disableElevation style={{
                        backgroundColor: "orange",

                    }}>
                        Thoát
                    </Button>
                </div>
                <Grid item lg={19} sm={19} style={{ width: "950px" }} >
                    <Grid container item spacing={0}>
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

                                    <TableRow hover role="checkbox" tabIndex={-1} >

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

                    </Grid>

                </Grid>
            </Box>
        </div >
    );
}

export default ModalDegreeInfo