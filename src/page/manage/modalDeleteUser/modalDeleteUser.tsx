import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react"

interface Iprop {
    open: boolean,
    setOpen: any

}


const DeleteUser = (props: Iprop) => {
    const { open, setOpen } = props



    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                className="Container-Delete"
            >
                <DialogTitle>{"Xóa kinh nghiệm làm việc"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Bạn có muốn xóa người dùng <b>abc</b> này
                    </DialogContentText>
                </DialogContent>
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
        </div>
    );
}


export default DeleteUser