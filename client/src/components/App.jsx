import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { getPlacesData } from '../api/index.js';
import Header from './Header.jsx';
import Login from './Login.jsx';
import SignUp from './Signup.jsx';
import List from './List.jsx';
import Itinerary from './Itinerary.jsx';

import { Autocomplete } from '@react-google-maps/api';
import { CssBaseline, Grid, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components'

const App = () => {

  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState(null);

  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [collection, setCollection] = useState([]);
  const [openCol, setOpenCol] = useState(false);

  const addCollection = (place) => {
    var newCollection = collection.slice();
    newCollection.push(place);
    var sortedCollection = newCollection.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
    setCollection(sortedCollection);
  }

  const signOut = () => {
    const conf = confirm('Sign Out?')
    if (conf) {
      setLoggedIn(false);
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [user])

  useEffect(() => {
    const filteredPlaces = places.filter((place => place.rating > rating));
    setFilteredPlaces(filteredPlaces);
  }, [rating])

  // useEffect(() => {
  //   if (bounds.sw && bounds.ne && loggedIn) {
  //     setIsLoading(true);
  //     getPlacesData(type, bounds.sw, bounds.ne)
  //       .then(data => {
  //         console.log('data: ', data)
  //         setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
  //         setFilteredPlaces([]);
  //         setIsLoading(false);
  //       })
  //   }
  // }, [type, bounds])

  // for no map
  useEffect(() => {
    setBounds({
      ne: {
        lat: coordinates.lat + 0.025,
        lng: coordinates.lng + 0.06
      },
      sw: {
        lat: coordinates.lat - 0.025,
        lng: coordinates.lng - 0.06
      }
    })
  }, [coordinates])

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} setOpenCol={setOpenCol} loggedIn={loggedIn} signOut={signOut} />
      {loggedIn ? (
        <FlexItem>
          <FlexChild>
            <List places={filteredPlaces.length ? filteredPlaces : places} isLoading={isLoading} type={type} setType={setType} rating={rating} setRating={setRating} addCollection={addCollection} />
            <Itinerary collection={collection} openCol={openCol} setOpenCol={setOpenCol} setCollection={setCollection}/>
          </FlexChild>
        </FlexItem>
      ) : (
        <Flex>
          <SignUp setLoggedIn={setLoggedIn} setUser={setUser}/>
          <Divider orientation="vertical" flexItem />
          <Login setLoggedIn={setLoggedIn} setUser={setUser}/>
        </Flex>
      )}
    </>
  )
}

const Flex = styled.div`
  display: flex;
  margin-top: 5%;
`

const FlexItem = styled.div`
  display: flex;
  justify-content: center;
`

const FlexChild = styled.div`
  max-width: 700px;
`

export default App;