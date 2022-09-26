import React, { useState, useEffect } from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

import { Divider } from '@mui/material';
import styled from 'styled-components'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <Flex>
      <Signup setLoggedIn={setLoggedIn}/>
      <Divider orientation="vertical" flexItem />
      <Login setLoggedIn={setLoggedIn}/>
    </Flex>
  )
}

const Flex = styled.div`
  display: flex;
  margin-top: 8%;
`

export default App;