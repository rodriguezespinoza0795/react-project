import React from 'react';
import Container from '@mui/material/Container';
import { UseState } from './UseState'
// import { ClassState } from './ClassState'
import { UseReducer } from './UseReducer'

function App() {
  return (
    <Container maxWidth="sm">
        <UseState name='UseState'/>
        <UseReducer name='UseReducer'/>
    </Container>
  );
}

export default App;