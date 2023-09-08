import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import "./registrationForms.scss"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Resume from "./Resume/Resume"
import Degreen from "./Degreen/Degreen"
import InfomationUser from "./infomationUser/infomationUser"



const StyledList = styled(List)({
    // selected and (selected + hover) states
    '&& .Mui-selected, && .Mui-selected:hover': {
        backgroundColor: 'red',
        '&, & .MuiListItemIcon-root': {
            color: 'White',
        },
    },
    // hover states
    '& .MuiListItemButton-root:hover': {
        backgroundColor: '#f5f5f5',
        '&, & .MuiListItemIcon-root': {
            color: 'black',
        },
    },
});

interface Iprop {
    open: boolean,
    setOpen: any

}

const RegistrationForms = (props: Iprop) => {
    const { open, setOpen } = props
    const [selectedIndex, setSelectedIndex] = React.useState(2);

    const handleListItemClick = (index: number) => {
        setSelectedIndex(index);
    };
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="xl"
                fullWidth
                className='container-registration-Forms'

            >

                <DialogTitle id="customized-dialog-title">
                    Hồ sơ đăng ký nhân viên
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={1} columns={12}>
                                <Grid item xs={4} className='sidebar'>
                                    <StyledList >
                                        <ListItemButton
                                            selected={selectedIndex === 1}
                                            onClick={() => handleListItemClick(1)}
                                        >

                                            <ListItemText primary="Hồ sơ nhân viên"
                                                className='registration-Forms-item'
                                            />
                                        </ListItemButton>
                                        <ListItemButton
                                            className='registration-Forms-item'
                                            selected={selectedIndex === 0}
                                            onClick={() => handleListItemClick(0)}
                                        >

                                            <ListItemText primary="Sơ yếu lý lịch"
                                                className='registration-Forms-item'
                                            />
                                        </ListItemButton>
                                        <ListItemButton
                                            selected={selectedIndex === 2}
                                            onClick={() => handleListItemClick(2)}
                                        >
                                            <ListItemText primary="Văn bằng"
                                                className='registration-Forms-item'

                                            />
                                        </ListItemButton>
                                    </StyledList>
                                </Grid>
                                <Grid item xs={12} className='Form-content'>
                                    <div>
                                        {selectedIndex === 2 &&
                                            <Degreen />
                                        }
                                        {selectedIndex === 0 &&
                                            <Resume />
                                        }
                                        {selectedIndex === 1 &&
                                            <InfomationUser />
                                        }
                                    </div>

                                </Grid>
                            </Grid>
                        </Box>
                    </DialogContentText>
                </DialogContent>
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
                    <Button variant="contained" disableElevation style={{
                        backgroundColor: "#7467ef",
                    }}>
                        Lưu lại
                    </Button>
                    <Button variant="contained" disableElevation>
                        Trình lên lãnh đạo
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

export default RegistrationForms