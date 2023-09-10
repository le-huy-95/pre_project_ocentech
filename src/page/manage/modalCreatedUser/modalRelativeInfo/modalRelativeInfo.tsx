import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import "./modalRelativeInfo.scss"
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';

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
                                size="small"
                            />
                        </Grid>

                        <Grid item xs={3} className='date'>
                            <TextField
                                required
                                id="outlined-required"
                                label="Ngày sinh"
                                fullWidth
                                type='date'
                                size='small'

                            />
                        </Grid>
                        <Grid item xs={3} >
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="chọn Nhóm"
                                fullWidth
                                size='small'

                            >
                                <MenuItem value={1} >
                                    Reactjs
                                </MenuItem>
                                <MenuItem value={2} >
                                    Java
                                </MenuItem>
                                <MenuItem value={3} >
                                    Mobile
                                </MenuItem>
                            </TextField>

                        </Grid>
                        <Grid item xs={3} >
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Quan hệ gia đình"
                                fullWidth
                                size='small'

                            >
                                <MenuItem value={1} >
                                    Ông/bà
                                </MenuItem>
                                <MenuItem value={2} >
                                    Cha/mẹ
                                </MenuItem>
                                <MenuItem value={3} >
                                    Anh/chị/Em
                                </MenuItem>
                                <MenuItem value={4} >
                                    Khác
                                </MenuItem>
                            </TextField>
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
                                size='small'

                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Số điện thoại"
                                fullWidth
                                size='small'

                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Số căn cước công dân"
                                fullWidth
                                size='small'

                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Địa chỉ"
                                fullWidth
                                size='small'

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