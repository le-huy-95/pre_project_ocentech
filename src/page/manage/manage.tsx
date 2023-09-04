import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import "./manage.scss"
import TableAddNewUser from "./tableAddNewUser"
import TableManage from "./tableManageUser"
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const StyledList = styled(List)({
  // selected and (selected + hover) states
  '&& .Mui-selected, && .Mui-selected:hover': {
    backgroundColor: 'red',
    '&, & .MuiListItemIcon-root': {
      color: 'pink',
    },
  },
  // hover states
  '& .MuiListItemButton-root:hover': {
    backgroundColor: 'orange',
    '&, & .MuiListItemIcon-root': {
      color: 'yellow',
    },
  },
});


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Manage = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(2);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" open={open} className='Appbar'>
        <Toolbar className='header'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography>
          </Typography>
          <Typography variant="h6" noWrap component="div" className='user-info-header'>
            <div className='icon-user'>
              <AccountCircleIcon />
            </div>
            <div className='user-name'>
              Huy lê
            </div>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <div className='company'> OceanTech</div>
        <div className='info-user'>
          <div className='avata'>
            <AccountCircleIcon />
          </div>
          <div className='name-user'>
            <b>Huy Lê</b>
          </div>
          <div className='optinal' >
            <span className='btn-logout' title='Đăng xuất'><ExitToAppIcon /></span>
            <span className="Profile" title='Trang cá nhân'><InfoIcon /></span>
          </div>
        </div>
        <StyledList >
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={() => handleListItemClick(1)}
          >
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary="Quản lý nhân viên" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={() => handleListItemClick(0)}
          >
            <ListItemIcon>
              <PersonAddAltIcon />
            </ListItemIcon>
            <ListItemText primary="Thêm mới nhân viên" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={() => handleListItemClick(2)}
          >
            <ListItemIcon>
              <PersonRemoveIcon />
            </ListItemIcon>
            <ListItemText primary="Kết thúc" />
          </ListItemButton>
        </StyledList>

      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          <TableAddNewUser
          />
        </Typography>

      </Main>
    </Box>
  );
}

export default Manage
