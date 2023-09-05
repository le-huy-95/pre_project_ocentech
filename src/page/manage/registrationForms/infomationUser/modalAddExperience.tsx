import Button from '@mui/material/Button';
import { useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import "./modalCreatedUser.scss"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}




export interface Iprop {
    open: any,
    setOpen: any
}


const ModalCreatedUser = (props: Iprop) => {
    const { open, setOpen } = props

    const [value, setValue] = useState(0);
    const [openRegistration, setOpenRegistration] = useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleShowhideRegistrationFrom = () => {
        setOpenRegistration(!openRegistration)
    }


    return (
        <div >
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="xl"
                className='modal-create-container'
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Tạo mới nhân viên
                </DialogTitle>
                <div>
                    cxzcxzcxzcx
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
                    <Button onClick={() => handleShowhideRegistrationFrom()} variant="contained" disableElevation>
                        Đăng ký
                    </Button>
                    <Button onClick={handleClose} variant="contained" disableElevation style={{
                        backgroundColor: "orange",

                    }}>
                        Thoát
                    </Button>
                </DialogActions>
                <RegistrationForms
                    open={openRegistration}
                    setOpen={setOpenRegistration}
                />
            </Dialog>

        </div>
    );
}

export default ModalCreatedUser