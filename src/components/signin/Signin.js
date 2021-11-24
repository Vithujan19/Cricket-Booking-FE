import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {FormLabel, Radio, RadioGroup} from "@material-ui/core";
import {useContext, useState} from "react";
import axios from "axios";
import baseURL from "../common/baseUrl";
import {Alert} from "@mui/material";
import {Redirect} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const theme = createTheme();

export default function SignIn() {
    // const {user, setUser} = useContext(authUserContext)
    const [loginStatus, setLoginStatus] = useState();
    const [errorMessage, setErrorMessage] = useState("")
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        role: '',
    });

    const onChange = e => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            if (!loginData.role) {
                setLoginStatus("fail")
                toast.error("Login Failed. Please select your role.")
                return;
            }
            const response = await axios.post(
                `${baseURL}${loginData.role}Login`,
                {
                    email: loginData.email,
                    password: loginData.password
                },
                config
            );
            if (loginData.role === 'buyer') {
                const {token, buyer} = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(buyer));
                // setUser(JSON.stringify(buyer))
                // console.log("User context : ", user)
            } else if (loginData.role === 'seller') {
                const {token, seller} = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(seller));
            } else if (loginData.role === 'admin') {
                const {token, admin} = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(admin));
            }
            // const {token, user} = response.data;
            // localStorage.setItem('token', token);
            // localStorage.setItem('user', JSON.stringify(buyer));
            setLoginStatus('success');
            toast.success("Login in Success");
            window.location.href = "/";
        } catch (error) {
            setLoginStatus('fail');
            toast.error("Login Failed.");
        }
    };

    if (localStorage.getItem('token')) {
        return <Redirect to={'/'}/>;
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/*{loginStatus === "fail" ? <ToastContainer /> : null}*/}
                    <ToastContainer/>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>

                    <form onSubmit={(e) => handleSubmit(e)}>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => onChange(e)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => onChange(e)}
                        />
                        <FormLabel component="legend">Role</FormLabel>
                        <RadioGroup row aria-label="role" name="role" onChange={(e) => onChange(e)}>
                            <FormControlLabel value="admin" control={<Radio/>} label="Admin"/>
                            <FormControlLabel value="buyer" control={<Radio/>} label="Buyer"/>
                            <FormControlLabel value="seller" control={<Radio/>} label="Seller"/>
                        </RadioGroup>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                            style={{backgroundColor:'blue', color:"#FFF",padding:10}}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/forgot" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
}