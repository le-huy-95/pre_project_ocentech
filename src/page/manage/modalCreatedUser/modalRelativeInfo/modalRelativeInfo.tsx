import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import "./modalRelativeInfo.scss"
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

const ModalRelativeInfo = () => {
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
                                label="Họ và tên"
                                // defaultValue="Hello World"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <Grid item xs={12} className='date_of_issue'>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="Chọn ngày sinh" />
                                    </DemoContainer>
                                </LocalizationProvider>

                            </Grid>
                        </Grid>

                        <Grid item xs={3}>
                            <FormControl sx={{ minWidth: 232 }}>
                                <InputLabel htmlFor="grouped-native-select">Giới tính</InputLabel>
                                <Select
                                    native defaultValue=""
                                    id="grouped-native-select"
                                    label="Giới tính"
                                    fullWidth
                                    required
                                >
                                    <option aria-label="None" value="" />
                                    <option value={1}>Nam</option>
                                    <option value={2}>Nữ</option>
                                    <option value={3}>Khác</option>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl sx={{ minWidth: 232 }}>
                                <InputLabel htmlFor="grouped-native-select">Quan hệ gia đình</InputLabel>
                                <Select
                                    native defaultValue=""
                                    id="grouped-native-select"
                                    label="Quan hệ gia đình"
                                    fullWidth
                                    required
                                >
                                    <option aria-label="None" value="" />
                                    <option value={1}>Ông/bà</option>
                                    <option value={2}>Cha/mẹ</option>
                                    <option value={3}>Anh/chị/Em</option>
                                    <option value={4}>Khác</option>

                                </Select>
                            </FormControl>
                        </Grid>

                    </Grid>


                </Grid>
                <br />
                <Grid item lg={20} sm={20} style={{ width: "950px" }} >
                    <Grid container item spacing={1}>
                        <Grid item xs={3}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Số điện thoại"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Số căn cước công dân"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Địa chỉ"
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
                                            Họ và tên
                                        </TableCell>
                                        <TableCell
                                            style={{ minWidth: "100px" }}
                                            align="center"
                                        >
                                            Email
                                        </TableCell>
                                        <TableCell
                                            style={{ minWidth: "80px" }}
                                            align="center"
                                        >
                                            Số điện thoại
                                        </TableCell>
                                        <TableCell
                                            style={{ minWidth: "80px" }}
                                            align="center"
                                        >
                                            Giới tính
                                        </TableCell>
                                        <TableCell
                                            style={{ minWidth: "70px" }}
                                            align="center"
                                        >
                                            Ngày sinh
                                        </TableCell>
                                        <TableCell
                                            style={{ minWidth: "70px" }}
                                            align="center"
                                        >
                                            Cccd
                                        </TableCell>
                                        <TableCell
                                            style={{ minWidth: "70px" }}
                                            align="center"
                                        >
                                            Địa chỉ
                                        </TableCell>
                                        <TableCell
                                            style={{ minWidth: "70px" }}
                                            align="center"
                                        >
                                            Mối quan hệ
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
                                        <TableCell >
                                            8881234567
                                        </TableCell>
                                        <TableCell >
                                            888
                                        </TableCell>
                                        <TableCell >
                                            888
                                        </TableCell>
                                        <TableCell >
                                            888888888
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

export default ModalRelativeInfo