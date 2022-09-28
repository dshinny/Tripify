import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button, Typography, Input } from '@mui/material';

const Form = ({ open, closeForm, handleAdd }) => {

  const [date, setDate] = useState(new Date());

  const handleClick = () => {
    handleAdd(date);
    closeForm();
  }

  const onChange = (e) => {
    setDate(new Date(e.target.value).toUTCString());
  }

  return (
    <Dialog open={open} onBackdropClick={closeForm}>
      <DialogTitle>Add to Itinerary</DialogTitle>
      <DialogContent>
        <DialogContentText>
          When would you like to go?
        </DialogContentText>
        <Input type='date' onChange={onChange}/>
        <DialogActions>
          <Button variant='contained' color='primary' size='small' onClick={handleClick}>Add</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default Form;