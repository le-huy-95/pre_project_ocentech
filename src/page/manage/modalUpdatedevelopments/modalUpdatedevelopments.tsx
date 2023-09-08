import "./modalUpdatedevelopments.scss"
import Button from '@mui/material/Button';
import { useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RegistrationForms from "../registrationForms/registrationForms"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';
import WcIcon from '@mui/icons-material/Wc';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DateRangeIcon from '@mui/icons-material/DateRange';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ModalSalaryIncrease from "./salaryIncrease/modalSalaryIncrease";
import ModalPromote from "./promote/modalPromote"
import ModalProposal from "./proposal/proposal"

export interface Iprop {
    open: boolean,
    setOpen: any

}

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

const ModalUpdatedevelopments = (props: Iprop) => {
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
                maxWidth="lg"
                className='modal-Updatedevelopments-container'
                fullWidth
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Cập nhật diễn biến
                </DialogTitle>
                <div>

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} columns={20} className='gird-all' >
                            <Grid item lg={5} sm={19} >
                                <div className='left'>
                                    <div className='icon-content'>
                                        <AccountCircleIcon />
                                    </div>
                                    <div className="name-user">Lê huy</div>
                                    <div className='user-infomation'>
                                        <div className="container">
                                            <div className="item">
                                                <div className="icon-item">
                                                    <WcIcon />
                                                </div>
                                                <div className="content-item">
                                                    Nam
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="icon-item">
                                                    <AlternateEmailIcon />
                                                </div>
                                                <div className="content-item">
                                                    mama@gmail.com
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="icon-item">
                                                    <LocalPhoneIcon />
                                                </div>
                                                <div className="content-item">
                                                    011111111111
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="icon-item">
                                                    <DateRangeIcon />
                                                </div>
                                                <div className="content-item">
                                                    22/2/2222
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="icon-item">
                                                    <GpsFixedIcon />
                                                </div>
                                                <div className="content-item">
                                                    việt nam
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Grid>
                            <Grid item lg={15} sm={20} style={{ width: "1000px" }} >
                                <div className="right">
                                    <Box sx={{ width: '100%' }}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                <Tab label="Yêu cầu tăng lương" {...a11yProps(0)} />
                                                <Tab label="Yêu cầu thăng chức" {...a11yProps(1)} />
                                                <Tab label="Đề xuất tham mưu" {...a11yProps(2)} />
                                            </Tabs>
                                        </Box>
                                        <CustomTabPanel value={value} index={0}>
                                            <ModalSalaryIncrease />
                                        </CustomTabPanel>
                                        <CustomTabPanel value={value} index={1}>
                                            <ModalPromote />
                                        </CustomTabPanel>
                                        <CustomTabPanel value={value} index={2}>
                                            <ModalProposal />
                                        </CustomTabPanel>
                                    </Box>
                                </div>

                            </Grid>
                        </Grid>
                    </Box>
                </div >
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

export default ModalUpdatedevelopments