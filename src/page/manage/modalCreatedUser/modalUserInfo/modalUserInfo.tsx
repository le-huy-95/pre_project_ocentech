import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UploadIcon from '@mui/icons-material/Upload';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import "../modalCreatedUser.scss"
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ModalInfoUser = () => {
    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={19} className='gird-all' >
                    <Grid item lg={6} sm={19} >
                        <div className='left'>
                            <div className='icon-content'>
                                <AccountCircleIcon />
                            </div>
                            <div className='btn-load'>
                                <Button variant="contained" size="medium" sx={{ background: '#7467ef' }}>
                                    <UploadIcon /> Tải ảnh lên
                                </Button>
                            </div>
                        </div>

                    </Grid>
                    <Grid item lg={13} sm={19} style={{ width: "860px" }} >
                        <Grid container item spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Họ và tên"
                                    // defaultValue="Hello World"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Mã nhân viên"
                                    // defaultValue="Hello World"
                                    fullWidth
                                />
                            </Grid>

                        </Grid>
                        <br />
                        <Grid container item spacing={2} className='gird-row'>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="email"
                                    fullWidth
                                // defaultValue="Hello World"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Số điện thoại"
                                    // defaultValue="Hello World"
                                    fullWidth
                                />
                            </Grid>


                        </Grid>
                        <br />
                        <Grid container item spacing={2} className='gird-row'>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Địa chỉ cụ thể"
                                    fullWidth
                                // defaultValue="Hello World"
                                />
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container item spacing={1} className='gird-row'>
                            <Grid item sm={4} xs={4}>
                                <FormControl sx={{ minWidth: 210 }}>
                                    <InputLabel htmlFor="grouped-native-select">Giới tính</InputLabel>
                                    <Select
                                        native defaultValue=""
                                        id="grouped-native-select"
                                        label="Grouping"
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
                            <Grid item sm={4} xs={4}>
                                <FormControl sx={{ minWidth: 210 }}>
                                    <InputLabel htmlFor="grouped-native-select">Nhóm</InputLabel>
                                    <Select
                                        native defaultValue=""
                                        id="grouped-native-select"
                                        label="Nhóm"
                                        fullWidth
                                        required
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={1}>Option 1</option>
                                        <option value={2}>Option 2</option>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} className='date'>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="Chọn ngày sinh" />
                                    </DemoContainer>
                                </LocalizationProvider>

                            </Grid>


                        </Grid>
                        <br />
                        <Grid container item spacing={2} className='gird-row'>
                            <Grid item xs={4}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Số căn cước công dân"
                                        fullWidth
                                    // defaultValue="Hello World"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Nơi cấp"
                                        fullWidth
                                    // defaultValue="Hello World"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={4} className='date'>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="Chọn ngày cấp" />
                                    </DemoContainer>
                                </LocalizationProvider>

                            </Grid>


                        </Grid>
                        <br />
                        <Grid container item spacing={2} className='gird-row'>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Dân tộc"
                                    fullWidth
                                // defaultValue="Hello World"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Tôn giáo"
                                    fullWidth
                                // defaultValue="Hello World"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div >
    );
}

export default ModalInfoUser