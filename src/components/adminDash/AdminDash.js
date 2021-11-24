import React, {useState} from "react";
import {Grid, Container, Typography, CardContent, Button} from "@mui/material";
import {Icon, Paper,Card} from "@material-ui/core";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SellIcon from '@mui/icons-material/Sell';
import CategoryIcon from '@mui/icons-material/Category';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import {useHistory} from "react-router-dom";
import './adminDash.css';

function AdminDashboard() {
    let history = useHistory()

    return(
        <Container maxWidth="lg" style={{backgroundColor:"#FFF",marginTop:20}}>
            <Typography fontSize={35} style={{textAlign:"center",padding:20}}>Admin Dashboard</Typography>
            <Grid container direction="row" alignItems="center" justifyContent="center">
                <Grid container style={{paddingTop:20, paddingBottom:20,paddingLeft:5,paddingRight:5}} item xs={12} sm={6} lg={4}>
                    <Paper elevation={3}  container  item alignItems='center' justifyContent='center' style={{backgroundColor:"white", width:"100%", height:260, borderRadius:20,alignItems:"center",justifyContent:'center',
                        shadowOffset: {height: 1, width: 1},}} >
                        <Grid  container className="gridAdminCard"  item alignItems='center' justifyContent='center' style={{backgroundColor:"white", width:"100%", height:260, borderRadius:20,alignItems:"center",justifyContent:'center',
                            shadowOffset: {height: 1, width: 1},}}
                               onClick={
                                   () => {
                                       history.push('/announce-form')
                                   }
                               }
                        >
                            <ShoppingCartIcon style={{justifyContent:'center'}} alignItems='center'  fontSize='large' />
                            <Typography>ANNOUNCEMENT</Typography>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid container style={{paddingTop:20, paddingBottom:20,paddingLeft:5,paddingRight:5}} item xs={12} sm={6} lg={4}>
                    <Paper elevation={3}  container  item alignItems='center' justifyContent='center' style={{backgroundColor:"white", width:"100%", height:260, borderRadius:20,alignItems:"center",justifyContent:'center',
                        shadowOffset: {height: 1, width: 1},}} >
                        <Grid  container className="gridAdminCard"  item alignItems='center' justifyContent='center' style={{backgroundColor:"white", width:"100%", height:260, borderRadius:20,alignItems:"center",justifyContent:'center',
                            shadowOffset: {height: 1, width: 1},}}
                               onClick={
                                   () => {
                                       history.push('/match')
                                   }
                               }
                        >
                            <ShoppingBasketIcon style={{justifyContent:'center'}} alignItems='center'  fontSize='large' />
                            <Typography>MATCH</Typography>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid container style={{paddingTop:20, paddingBottom:20,paddingLeft:5,paddingRight:5}} item xs={12} sm={6} lg={4}>
                    <Paper elevation={3}  container  item alignItems='center' justifyContent='center' style={{backgroundColor:"white", width:"100%", height:260, borderRadius:20,alignItems:"center",justifyContent:'center',
                        shadowOffset: {height: 1, width: 1},}} >
                        <Grid  container className="gridAdminCard"  item alignItems='center' justifyContent='center' style={{backgroundColor:"white", width:"100%", height:260, borderRadius:20,alignItems:"center",justifyContent:'center',
                            shadowOffset: {height: 1, width: 1},}}
                               onClick={
                                   () => {
                                       history.push('/ticket')
                                   }
                               }
                        >
                            <SellIcon style={{justifyContent:'center'}} alignItems='center'  fontSize='large' />
                            <Typography>TICKET</Typography>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid container style={{paddingTop:20, paddingBottom:20,paddingLeft:5,paddingRight:5}} item xs={12} sm={6} lg={4}>
                    <Paper elevation={3}  container  item alignItems='center' justifyContent='center' style={{backgroundColor:"white", width:"100%", height:260, borderRadius:20,alignItems:"center",justifyContent:'center',
                        shadowOffset: {height: 1, width: 1},}} >
                        <Grid  container className="gridAdminCard"  item alignItems='center' justifyContent='center' style={{backgroundColor:"white", width:"100%", height:260, borderRadius:20,alignItems:"center",justifyContent:'center',
                            shadowOffset: {height: 1, width: 1},}}
                               onClick={
                                   () => {
                                       history.push('/add-stadium')
                                   }
                               }
                        >
                            <CategoryIcon style={{justifyContent:'center'}} alignItems='center'  fontSize='large' />
                            <Typography>STATDIUM</Typography>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid container style={{paddingTop:20, paddingBottom:20,paddingLeft:5,paddingRight:5}} item xs={12} sm={6} lg={4}>
                    <Paper elevation={3}  container  item alignItems='center' justifyContent='center' style={{backgroundColor:"white", width:"100%", height:260, borderRadius:20,alignItems:"center",justifyContent:'center',
                        shadowOffset: {height: 1, width: 1},}} >
                        <Grid  container className="gridAdminCard"  item alignItems='center' justifyContent='center' style={{backgroundColor:"white", width:"100%", height:260, borderRadius:20,alignItems:"center",justifyContent:'center',
                            shadowOffset: {height: 1, width: 1},}}
                               onClick={
                                   () => {
                                       history.push('/users')
                                   }
                               }
                        >
                            <FeaturedVideoIcon style={{justifyContent:'center'}} alignItems='center'  fontSize='large' />
                            <Typography>USERS</Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AdminDashboard;