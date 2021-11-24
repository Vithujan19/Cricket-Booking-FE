import React, {useState} from "react";
import {Button, FormControl, Grid, TextareaAutosize, TextField} from "@mui/material";
import axios from "axios";
import baseURL from "../common/baseUrl";

function ProfileDetails() {

    const [isUpdated, setIsUpdated] = useState(false);


    const updateProfile = async (event) => {
        event.preventDefault();

    }

    const onChange = e => {

        console.log(e)
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid xs={12} sm={12}>
                <h3 style={{textAlign:"center"}}>Profile</h3>
            </Grid>
            <Grid xs={12} sm={8} container
                  direction="row"
                  justifyContent="center"
                  alignItems="center" style={{padding:10}}>
            <Grid container className="profGrid">
                <Grid xs={12} sm={12}>
                    <p style={{color: "blue", fontSize: 14, fontWeight: 500}}>* First Name</p>
                </Grid>
                <Grid xs={12} sm={12}>
                    <TextField name="first_name" id="standard-basic"
                               variant="standard"
                               style={{width: '90%'}} onChange={(e) => onChange(e)}/>
                </Grid>
            </Grid>
            <Grid container className="profGrid">
                <Grid xs={12} sm={12}>
                    <p style={{color: "blue", fontSize: 14, fontWeight: 500}}>* Last Name</p>
                </Grid>
                <Grid xs={12} sm={12}>
                    <TextField name="last_name" id="standard-basic" variant="standard"
                               style={{width: '90%'}} onChange={(e) => onChange(e)}/>
                </Grid>
            </Grid>
            <Grid container className="profGrid">
                <Grid xs={12} sm={12}>
                    <p style={{color: "blue", fontSize: 14, fontWeight: 500}}>* Email</p>
                </Grid>
                <Grid xs={12} sm={12}>
                    <TextField disabled name="email" id="standard-basic" variant="standard"
                               style={{width: '90%'}}/>
                </Grid>
            </Grid>
            <Grid container className="profGrid">
                <Grid xs={12} sm={12}>
                    <p style={{color: "blue", fontSize: 14, fontWeight: 500}}>* Mobile</p>
                </Grid>
                <Grid xs={12} sm={12}>
                    <TextField  name="mobile" id="standard-basic" variant="standard"
                               style={{width: '90%'}} onChange={(e) => onChange(e)}/>
                </Grid>
            </Grid>
            <Grid container className="profGrid">
                <Grid xs={12} sm={12}>
                    <p style={{color: "blue", fontSize: 14, fontWeight: 500}}>* Address Line 1 : </p>
                </Grid>
                <Grid xs={12} sm={12}>
                    <TextField  name="house_number" id="standard-basic"
                               variant="standard"
                               style={{width: '90%'}} onChange={(e) => onChange(e)}/>
                </Grid>
            </Grid>
            <Grid container className="profGrid">
                <Grid xs={12} sm={12}>
                    <p style={{color: "blue", fontSize: 14, fontWeight: 500}}>* Address Line 2</p>
                </Grid>
                <Grid xs={12} sm={12}>
                    <TextField name="street_name" id="standard-basic"
                               variant="standard"
                               style={{width: '90%'}} onChange={(e) => onChange(e)}/>
                </Grid>
            </Grid>
            <Grid container className="profGrid">
                <Grid xs={12} sm={12}>
                    <p style={{color: "blue", fontSize: 14, fontWeight: 500}}>* City : </p>
                </Grid>
                <Grid xs={12} sm={12}>
                    <TextField name="place" id="standard-basic" variant="standard"
                               style={{width: '90%'}} onChange={(e) => onChange(e)}/>
                </Grid>
            </Grid>
                    {/*<Grid container xs={12} sm={12} className="profGrid">*/}
                    {/*    <div className="profChange">*/}
                    {/*        <Button style={{backgroundColor: '#00539F', color: "#FFF"}}><ChangePasswordModal userDetails={user}/></Button>*/}
                    {/*    </div>*/}
                    {/*</Grid>*/}
                    <Grid container direction="row" justifyContent="center" alignItems="center" xs={12} sm={12}
                          className="profGrid">
                        <Button onClick={updateProfile} style={{backgroundColor: '#00539F', color: "#FFF"}}>Save</Button>
                    </Grid>
            </Grid>
        </Grid>
    )
}

export default ProfileDetails;