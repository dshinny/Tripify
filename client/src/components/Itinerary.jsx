import React, { useState, useEffect } from 'react';
import { Dialog, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';

  const Itinerary = ({ setOpenCol, openCol, collection, setCollection }) => {

  const handleDelete = (removed, i) => {
    console.log(collection);
    console.log(removed);
    const newCollection = collection.filter(item => {
      return item.place.name !== removed.place.name
    })
    console.log('new: ', newCollection)
    setCollection(newCollection);
  }

  return (
    <Dialog open={openCol} onBackdropClick={() => setOpenCol(false)}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold'}}>Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold'}}>Event</TableCell>
              <TableCell sx={{ fontWeight: 'bold'}}>Type</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {collection.map((item, i) => {
              var date = item.date.slice(0, 10)
              return (
                <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{date}</TableCell>
                  <TableCell>{item.place.name}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell sx={{ paddingRight: 3 }}>
                    <Button onClick={() => handleDelete(item, i)}>
                      <DeleteIcon/>
                    </Button>
                  </TableCell>
                </TableRow>
              )
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Dialog>
  )
}

export default Itinerary;