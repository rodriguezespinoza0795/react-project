import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';


function UseState({ name }) {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        
        if(loading)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    },[loading])

    const handleButton = () => {
        // setError(!error)
        setLoading(true)
    }

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
                fullWidth
                />
            {loading ?
                <LoadingButton 
                loading
                variant="contained"
                fullWidth>
                LOADING
                </LoadingButton>
            :
                <Button
                variant="contained"
                onClick={handleButton}
                fullWidth>
                Comprobar
                </Button>
            }
            
            {error && (
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