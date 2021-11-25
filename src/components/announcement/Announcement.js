import React, {useEffect, useState} from 'react';
import {Divider, Grid, Typography} from "@mui/material";
import EditModal from './EditModal';
import axios from "axios";
import baseURL from "../common/baseUrl";

function Announcement() {

    const [news, setNews] = useState([]);
    console.log(news);

    const getAllNews = async () => {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        await axios
            .get(`${baseURL}viewAllNews`,config)
            .then((response) => {
                setNews(response.data);
            })
            .catch((err) => {
                console.log("Error : ", err.message)
                console.log('Unable access ...');
            });
    };

    useEffect(async () => {
        await getAllNews();
    }, []);

    return(
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid container direction="row" justifyContent="center" alignItems="center" xs={12} sm={12}>
                <Typography variant="h5" style={{textAlign:"center",paddingTop:20}}>
                    Announcements
                </Typography>
            </Grid>
            {news.map(e => (
                <Grid container xs={12} sm={8} style={{margin:10,padding:15,borderRadius:10, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                    <Grid xs={12} sm={12} style={{borderBottomStyle:"solid", borderWidth:1, borderColor:"#969393"}}>
                        <Typography variant="h6">
                            {e.title}
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={12}>
                        <Typography style={{fontSize:14}}>
                            {e.body}
                        </Typography>
                    </Grid>
                    <Grid container direction="row" alignItems="flex-end" justifyContent="flex-end" xs={12} sm={12}>
                        <EditModal news={e}/>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}

export default Announcement;