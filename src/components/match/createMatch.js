import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import '../signup/Signup.css';
import {useFormik} from "formik";
import * as yup from "yup";
import axios from "axios";
import baseURL from "../common/baseUrl";
import {FilledInput, FormControl, IconButton, InputAdornment, InputLabel} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {useHistory} from "react-router-dom";
import {useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

export default function CreateMatch() {
    const history = useHistory();
    const [sellerCreateStatus, setSellerCreateStatus] = useState();
    const [error, setError] = useState();
    const [userId, setUserId] = useState();

    const formik = useFormik({
        initialValues: {
            venue: '',
            match_date: '',
            viewers_count: '',
            playing_teams: [],
            status:''
        },
        validationSchema: yup.object({
            venue: yup.string().required('Nameis required'),
            match_date: yup.string().required('Country is required'),
            viewers_count: yup.string().required('Capacity is required'),
            playing_teams: yup.string().required('City is required'),
            status:yup.string().required('Status is required'),
        }),
        onSubmit: async (user) => {

            const data = {
                venue: user.venue,
                match_date: user.match_date,
                viewers_count: user.viewers_count,
                playing_teams: user.playing_teams,
                status:user.status,
            }
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };

            await axios
                .post(`${baseURL}createAdmin`, data, config)
                .then((response) => {
                    toast.success('Buyer created successfully.')
                    setUserId(response.data)
                    setSellerCreateStatus('success')
                })
                .catch((err) => {
                    setSellerCreateStatus('fail');
                    if (err.response.status === 402) {
                        toast.error("Mobile number already exist. Please try another.")
                    } else if (err.response.status === 403) {
                        toast.error("Email already exist. Please try another.")
                    } else {
                        toast.error(err.message)
                    }
                });

        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm" style={{paddingTop: 40}}>
                <CssBaseline/>
                <ToastContainer/>
                <Box>

                    <Typography component="h1" variant="h5" style={{textAlign:"center",paddingBottom:10}}>
                        Schedule Match
                    </Typography>
                    <form autoComplete="off" onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <FormControl sx={{width: '100%'}} variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">Venue</InputLabel>
                                    <FilledInput
                                        autoComplete="name"
                                        name="venue"
                                        required
                                        fullWidth
                                        id="venue"
                                        label="venue"
                                        autoFocus
                                        onChange={formik.handleChange}
                                        value={formik.values.venue}
                                    />
                                    {formik.errors.venue ? (
                                        <div className="text-danger">
                                            {formik.errors.venue}
                                        </div>
                                    ) : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl sx={{width: '100%'}} variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">Match date</InputLabel>
                                    <FilledInput
                                        required
                                        fullWidth
                                        id="match_date"
                                        label="match_date"
                                        name="match_date"
                                        autoComplete="match_date"
                                        onChange={formik.handleChange}
                                        value={formik.values.match_date}
                                    />
                                    {formik.errors.match_date ? (
                                        <div className="text-danger">
                                            {formik.errors.match_date}
                                        </div>
                                    ) : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl sx={{width: '100%'}} variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">Viewers count</InputLabel>
                                    <FilledInput
                                        required
                                        fullWidth
                                        id="viewers_count"
                                        label="viewers_count"
                                        name="viewers_count"
                                        autoComplete="viewers_count"
                                        onChange={formik.handleChange}
                                        value={formik.values.viewers_count}
                                    />
                                    {formik.errors.viewers_count ? (
                                        <div className="text-danger">
                                            {formik.errors.viewers_count}
                                        </div>
                                    ) : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl sx={{width: '100%'}} variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">Playing teams</InputLabel>
                                    <FilledInput
                                        autoComplete="place"
                                        name="playing_teams"
                                        required
                                        fullWidth
                                        id="playing_teams"
                                        label="playing teams"
                                        autoFocus
                                        onChange={formik.handleChange}
                                        value={formik.values.playing_teams}
                                    />
                                    {formik.errors.playing_teams ? (
                                        <div className="text-danger">
                                            {formik.errors.playing_teams}
                                        </div>
                                    ) : null}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl sx={{width: '100%'}} variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">status</InputLabel>
                                    <FilledInput
                                        autoComplete="status"
                                        name="status"
                                        required
                                        fullWidth
                                        id="status"
                                        label="status"
                                        autoFocus
                                        onChange={formik.handleChange}
                                        value={formik.values.status}
                                    />
                                    {formik.errors.status ? (
                                        <div className="text-danger">
                                            {formik.errors.status}
                                        </div>
                                    ) : null}
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            // onClick={() => {history.push("/verify")}}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Schedule Match
                        </Button>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
}