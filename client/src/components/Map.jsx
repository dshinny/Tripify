import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

import { Paper, Typography, Rating, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Map = ({ coordinates, setCoordinates, setBounds, places, setChildClicked }) => {

  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <StyledMapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disabledDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div lat={Number(place.latitude)} lng={Number(place.longitude)} key={i} className='img-card'>
            {!isDesktop ? (
              <LocationOnOutlinedIcon color='primary'/>
            ) : (
              <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '130px' }}>
                <Typography variant='subtitle2' gutterBottom>
                  {place.name}
                </Typography>
                <Image src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={place.name}/>
                <Rating size='small' value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </StyledMapContainer>
  )
}

const StyledMapContainer = styled.div`
margin-top: 20px;
height: 90vh;
width: 100%,
`;

const Image = styled.img`
  cursor: pointer;
`

export default Map;