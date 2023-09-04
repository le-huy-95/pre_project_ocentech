import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./login.scss"

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

 const Login = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className='container-login'>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {/* <Box
          sx={{
            // marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          
        > */}
        <div className='login-content'>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} className='sigin-icon'>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Tài khoản"
              label="Tài khoản"
              name="Tài khoản"
              autoComplete="Tài khoản"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Mật khẩu"
              label="Mật khẩu"
              type="Mật khẩu"
              id="Mật khẩu"
              autoComplete="current-Mật khẩu"
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            
          </Box>
          </div>
        {/* </Box> */}
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default Login