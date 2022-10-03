import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import CustomButton from './components/Button';

const App = () => {
  return (
    <Box>
      <Button variant='contained' color='slateBlue'>
        Test
      </Button>
      <Typography variant='body1'>Hello World</Typography>
      <CustomButton>CUSTOM BUTTON</CustomButton>
    </Box>
  );
};

export default App;
