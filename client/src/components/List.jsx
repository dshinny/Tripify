import React, { useState, useEffect, createRef } from 'react';
import PlaceDetails from './PlaceDetails.jsx';

import styled from 'styled-components';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, InputBase } from '@mui/material';

const List = ({ places, isLoading, type, setType, rating, setRating, addCollection }) => {

  return (
    <Container>
      {isLoading ? (
        <div className='loading'>
          <CircularProgress size='5rem' />
        </div>
      ) : (
        <>
          <FormControl variant='standard' className='form-control'>
            <InputLabel>Type</InputLabel>
            <Select className='list-select' value={type} label='type' onChange={(e) => setType(e.target.value)}>
              <MenuItem value='restaurants'>Restaurants</MenuItem>
              <MenuItem value='hotels'>Hotels</MenuItem>
              <MenuItem value='attractions'>Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant='standard'>
            <InputLabel>Rating</InputLabel>
            <Select className='list-select' value={rating} label='rating' onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3</MenuItem>
              <MenuItem value={4}>Above 4</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className='list-list'>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails place={place} addCollection={addCollection}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  padding: 25px;
`

export default List;