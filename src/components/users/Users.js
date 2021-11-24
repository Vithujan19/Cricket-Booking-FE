import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Grid} from "@mui/material";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    { field: 'role', headerName: 'Role', width: 130 },
    {
        field: 'mobile',
        headerName: 'Mobile',
        type: 'String',
        width: 150,
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'String',
        width: 220,
    },
    {
        field: 'address',
        headerName: 'Address',
        sortable: false,
        width: 300,
    },

];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon',role:"admin",email:"vithu@gmail.com", mobile: '078956422',address:'Colombo west', },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', role:"customer",email:"vithu@gmail.com", mobile: '078956422',address:'Colombo west', },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', role:"customer",email:"vithu@gmail.com", mobile: '078956422',address:'Colombo west', },
    { id: 4, lastName: 'Stark', firstName: 'Arya', role:"customer",email:"vithu@gmail.com", mobile: '078956422',address:'Colombo west', },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', role:"customer",email:"vithu@gmail.com", mobile: '078956422',address:'Colombo west', },
    { id: 6, lastName: 'Melisandre', firstName: null, role:"customer",email:"vithu@gmail.com", mobile: '078956422',address:'Colombo west', },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', role:"customer",email:"vithu@gmail.com", mobile: '078956422',address:'Colombo west', },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', role:"customer",email:"vithu@gmail.com", mobile: '078956422',address:'Colombo west', },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', role:"customer",email:"vithu@gmail.com", mobile: '078956422',address:'Colombo west', },
];

export default function DataTable() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ height: 500, width: '100%',padding:20 }}>
            <Grid xs={12} sm={12}>
                <h4 style={{textAlign:"center"}}>All User Details</h4>
            </Grid>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[6]}
                checkboxSelection
            />
        </Grid>
    );
}
