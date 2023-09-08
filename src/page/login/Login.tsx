import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./login.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { loginApi } from "../../redux/slice/login.slice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, isloading, isSuccess } = useAppSelector((state) => state.auth);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log(data);
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    });
    if (data) {
      dispatch(
        loginApi({
          username: data.get("username") as string,
          password: data.get("password") as string,
        })
      );
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      toast.success("Đăng nhập thành công");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/manageuser");
    } else {
      toast.error("Tên Đăng nhập hoặc mật khẩu sai");
    }
  }, [isSuccess, navigate, user]);

  return (
    <div className="container-login">
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
          <div className="login-content">
            <Avatar
              sx={{ m: 1, bgcolor: "secondary.main" }}
              className="sigin-icon"
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Tài khoản"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
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
};

export default Login;
