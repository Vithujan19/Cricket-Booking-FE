import React from 'react';
import {Divider, Grid, Typography} from "@mui/material";
import EditModal from './EditModal';

function Announcement() {
    const data = [
        {
            title: "Announcement 01",
            news: " is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lor",
        },
        {
            title: "Announcement 02",
            news: " is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lor",
        },
    ]
    return(
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid container direction="row" justifyContent="center" alignItems="center" xs={12} sm={12}>
                <Typography variant="h5" style={{textAlign:"center",paddingTop:20}}>
                    Announcements
                </Typography>
            </Grid>
            {data.map(e => (
                <Grid container xs={12} sm={8} style={{margin:10,padding:15,borderRadius:10, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                    <Grid xs={12} sm={12} style={{borderBottomStyle:"solid", borderWidth:1, borderColor:"#969393"}}>
                        <Typography variant="h6">
                            {e.title}
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={12}>
                        <Typography style={{fontSize:14}}>
                            {e.news}
                        </Typography>
                    </Grid>
                    <Grid container direction="row" alignItems="flex-end" justifyContent="flex-end" xs={12} sm={12}>
                        <EditModal data={e}/>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}

export default Announcement;