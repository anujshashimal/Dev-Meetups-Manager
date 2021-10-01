import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const axios = require("axios");



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function DenseTable(props) {
    

    

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Start Time</TableCell>
            <TableCell align="left">Join Url</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {props.meetings.map((row) => {
            return (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.id}
              </TableCell>
              <TableCell align="left">{row.topic}</TableCell>
              <TableCell align="left">{row.agenda}</TableCell>
              <TableCell align="left">{row.start_time}</TableCell>
              <TableCell align="left"><a target="_blank" href={row.join_url}>{row.join_url}</a></TableCell>
              <TableCell align="right">
                {/* <Button variant="outlined" size="small" color="warning"><EditIcon fontSize="small" /></Button> */}
                <Button variant="outlined" size="small" color="error"><DeleteIcon fontSize="small" /></Button>
                </TableCell>
              
            </TableRow>
        );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}