import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Grid} from "@mui/material";

function createData(name, country, capacity, city) {
    return { name, country, capacity, city };
}

const rows = [
    createData('MS Dhoni', 'India', 60, 'Point pedro',),
    createData('Ranchii', 'India', 90, 'Point pedro', ),
    createData('Ahmedabad', 'Dubai', 160, 'Point pedro',),
    createData('Dubai INTL', 'Arabia', 37, 'Point pedro', ),
    createData('SL Sinhala', 'Sri Lanka', 160, 'Point pedro', ),
];

export default function StadiumTable() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid xs={12} sm={12}>
                <h3 style={{textAlign:"center"}}>Stadium Lists</h3>
            </Grid>
            <Grid xs={12} sm={8}>
        <TableContainer component={Paper} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Stadium Name</TableCell>
                        <TableCell align="right">Country</TableCell>
                        <TableCell align="right">Capacity</TableCell>
                        <TableCell align="right">City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.country}</TableCell>
                            <TableCell align="right">{row.capacity}</TableCell>
                            <TableCell align="right">{row.city}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            </Grid>
        </Grid>
    );
}
