import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@material-ui/core';

export default function Player() {
  return (
      <Container>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Player_Name" variant="standard" />
      <TextField id="standard-basic" label="Player_Position" variant="standard" />
    </Box>
    </Container>
  );
}
