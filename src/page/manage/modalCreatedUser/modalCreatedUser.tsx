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
import ModalInfoUser from "./modalUserInfo/modalUserInfo"
import ModalDegreeInfo from "./modalDegreenInfo/modalDegreeInfo "
import ModalRelativeInfo from "./modalRelativeInfo/modalRelativeInfo"
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




interface Iprop {
    open: any,
    setOpen: any
}


const ModalCreatedUser = (props: Iprop) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const { open, setOpen } = props

    const handleClose = () => {
        setOpen(false);
    };



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
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Thông tin nhân viên" {...a11yProps(0)} />
                            <Tab label="Thông tin văn bằng" {...a11yProps(1)} />
                            <Tab label="Quan hệ gia đình" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <ModalInfoUser />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <ModalDegreeInfo />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <ModalRelativeInfo />
                    </CustomTabPanel>
                </Box>
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
                    <Button onClick={handleClose} variant="contained" disableElevation >
                        Đăng ký
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

export default ModalCreatedUser