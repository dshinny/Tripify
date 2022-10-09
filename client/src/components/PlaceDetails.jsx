import React, { useState, useEffect } from 'react';

import Form from './Form.jsx';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, Rating, Fab } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AddIcon from '@mui/icons-material/Add'

const PlaceDetails = ({ place, addCollection, type, refProp, selected }) => {

  const [open, setOpen] = useState(false);

  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleAdd = (date) => {
    let data = {
      date: date.toString(),
      place: place,
      type: type
    }
    addCollection(data);
  }

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 250 }}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography variant='subtitle1' align='right'>{place.price_level}</Typography>
        <Typography variant='h4'>{place.name}</Typography>
        <Typography gutterBottom variant='subtitle1' className='place-ranking'>{place.ranking}</Typography>
        <Box display='flex'>
          <Rating value={Number(place.rating)} precision={0.25} readOnly />
          <Typography gutterBottom variant='subtitle1' className='place-ranking'>({place.num_reviews})</Typography>
        </Box>
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size='small' label={name} style={{ margin: '5px 5px 5px 0' }}/>
        ))}
        <div>
          {place.is_closed ? (
            <Chip size='small' label='Closed' style={{ margin: '5px 5px 5px 0' }} color='error'/>
            ) : (
            <Chip size='small' label='Open' style={{ margin: '5px 5px 5px 0' }} color='success'/>
          )}
        </div>
        {place?.address && (
          <Typography gutterBottom variant='body2' color='textSecondary'>
            <LocationOnIcon /> {place.address}
          </Typography>
        )}
        <CardActions>
          <Fab variant="extended" size='small' onClick={() => setOpen(true)}>
            <AddIcon sx={{ mr: 1 }} />
            Add to Itinerary
          </Fab>
        </CardActions>
      </CardContent>
      <Form open={open} closeForm={() => setOpen(false)} handleAdd={handleAdd}/>
    </Card>
  )
}

export default PlaceDetails;