import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, Button, Typography } from '@mui/material';
import Calendar from 'react-calendar';

const Form = ({ open, closeForm, handleAdd }) => {

  const [date, setDate] = useState(new Date());

  const handleClick = () => {
    handleAdd(date);
    closeForm();
  }

  const onChange = date => {
    setDate(date);
  }

  return (
    <Dialog open={open} onBackdropClick={closeForm}>
      <Typography variant='h6' sx={{ textAlign: 'center' }}>Add to Itinerary</Typography>
      <Calendar onChange={onChange} value={date}/>
      <Button variant='contained' color='primary' size='small' onClick={handleClick}>Add</Button>
    </Dialog>
  )
}

export default Form;