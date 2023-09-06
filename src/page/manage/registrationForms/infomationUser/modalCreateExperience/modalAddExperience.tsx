import Button from '@mui/material/Button';
import { useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "./modalAddExperience.scss"
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}





export interface Iprop {
    open: any,
    setOpen: any
    action: string
    setAction: any
}


const ModalCreatedExperience = (props: Iprop) => {
    const { open, setOpen, action, setAction } = props


    const handleClose = () => {
        setOpen(false);
        setAction("")
    };




    return (
        <div >
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="xl"
                className='Modal-container'

            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {action === "Create" ? " Tạo mới kinh nghiệm làm việc" : "Chỉnh sửa kinh nghiệm làm việc"}
                </DialogTitle>
                <div>
                    <Grid container spacing={2} className='height'  >

                        <Grid item lg={13} sm={19} style={{ width: "900px" }} >

                            <Grid container item spacing={2} className='item'>
                                <Grid item xs={4} className='space'>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker label="Ngày bắt đầu" />
                                        </DemoContainer>
                                    </LocalizationProvider>

                                </Grid>
                                <Grid item xs={4} className='space'>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker label="Ngày kết thúc" />
                                        </DemoContainer>
                                    </LocalizationProvider>

                                </Grid>
                                <Grid item xs={4} lg={4}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Tên công ty"
                                        // defaultValue="Hello World"
                                        fullWidth
                                    />
                                </Grid>

                            </Grid>
                            <br />
                            <Grid container item spacing={2} className='item'>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Địa chỉ công ty"
                                        fullWidth
                                    // defaultValue="Hello World"
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container item spacing={2} className='item'>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Nội dung công việc"
                                        fullWidth
                                    // defaultValue="Hello World"
                                    />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </div>

                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon className='icon-exit' />
                </IconButton>


                <DialogActions>
                    <Button variant="contained" disableElevation onClick={handleClose} style={{
                        backgroundColor: "#7467ef",

                    }}>
                        Lưu
                    </Button>

                    <Button onClick={handleClose} variant="contained" disableElevation style={{
                        backgroundColor: "orange",

                    }}>
                        Thoát
                    </Button>
                </DialogActions>

            </Dialog>

        </div >
    );
}

export default ModalCreatedExperience