import React from 'react';
import Container from '@mui/material/Container';
import { UseState } from './UseState'
import { ClassState } from './ClassState'

function App() {
  return (
    <Container maxWidth="sm">
        <UseState name='UseState'/>
        <ClassState name='ClassState'/>
    </Container>
  );
}

export default App;