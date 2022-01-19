import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const SECURITY_CODE = 'paradigma'

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false
    });

    console.log(state)
    React.useEffect(() => {

        if (!!state.loading)
        setTimeout(() => {
              if (state.value === SECURITY_CODE) {
                setState({...state,error: false,loading: false});
              } else {
                setState({...state,error: true,loading: false});
              }
        }, 3000)
    }, [state.loading]);

    return (
        <Box sx={{margin: 2, py:5}}>
            <Typography
                variant="h4"
                align="center">
            Eliminar {name}
            </Typography>
            <Typography
                variant="h6"
                align="center">
            Por favor, escribe el código de seguridad.
            </Typography>
            <TextField 
                label="Código de Seguridad"
                value={state.value}
                onChange={(e) => setState({...state, value:e.target.value})}
                fullWidth
                />
            {state.loading ?
                <LoadingButton 
                loading
                variant="contained"
                fullWidth>
                LOADING
                </LoadingButton>
            :
                <Button
                variant="contained"
                onClick={() => setState({...state,loading: true})}
                fullWidth>
                Comprobar
                </Button>
            }
            
            {state.error && (
                <Typography
                variant="h6"
                align="center"
                color='red'>
                Error: El código es incorrecto
                </Typography>
            )}
        </Box>
    )
  }
  
  export { UseState } ;