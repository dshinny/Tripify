import React, { useState, useEffect } from 'react';

import { getPlacesData, getWeatherData } from '../api/index.js';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Header from './Header.jsx';

import { Divider } from '@mui/material';
import styled from 'styled-components'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState(null);

  const signOut = () => {
    const conf = confirm('Sign Out?')
    if (conf) {
      setLoggedIn(false);
    }
  }

  return (
    <>
      <Header loggedIn={loggedIn} signOut={signOut}/>
      <Flex>
        <Signup setLoggedIn={setLoggedIn}/>
        <Divider orientation="vertical" flexItem />
        <Login setLoggedIn={setLoggedIn}/>
      </Flex>
    </>
  )
}

const Flex = styled.div`
  display: flex;
  margin-top: 8%;
`

export default App;