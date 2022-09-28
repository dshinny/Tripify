import React, { useState, useEffect } from 'react';
import { Autocomplete } from '@react-google-maps/api';

import styled from 'styled-components';
import { AppBar, Paper, InputBase, Divider, IconButton, Typography, Avatar, Stack, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Header = ({ setCoordinates, setOpenCol, loggedIn, signOut }) => {

  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  }

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  }

  return (
    <AppBar position='static' color='inherit' sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
      <Typography variant='h5' sx={{ padding: '10px 10px' }}>
        Tripify
      </Typography>
      {loggedIn ? (
        <Flex>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 230, marginRight: 2 }}
          >
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
            </Autocomplete>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <IconButton sx={{ p: '10px' }} aria-label="menu" onClick={() => setOpenCol(true)}>
            <MenuIcon />
          </IconButton>
          <Button variant='contained' onClick={signOut}>Logout</Button>
        </Flex>
      ) : (
        <></>
      )}
    </AppBar>
  );
}

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 1%;
  align-items: center;
`

export default Header;