import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const SECURITY_CODE = 'paradigma'

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted:false,
        confirmed:false
    });
    
    const onConfirm = () => setState({...state,error: false,loading: false,confirmed:true, value:''})
    const onError = () => setState({...state,error: true,loading: false});
    const onWrite = (e) => setState({...state, value:e.target.value})
    const onCheck = () => setState({...state,loading: true})
    const onDelete = () => setState({...state,deleted: true})
    const onReset = () => setState({...state,confirmed: false,deleted: false})

    React.useEffect(() => {
        if (!!state.loading)
        setTimeout(() => {
            state.value === SECURITY_CODE ? onConfirm() : onError()
        }, 3000)
    }, [state.loading]);

    if(!state.deleted && !state.confirmed){
    return (
        <Box sx={{margin: 2, py:5}}>
            <Typography variant="h4" align="center"> Eliminar {name}</Typography>
            <Typography variant="h6" align="center"> Por favor, escribe el código de seguridad.</Typography>
            <TextField 
                type="Password"
                label="Código de Seguridad"
                value={state.value}
                onChange={(e) => onWrite(e)}
                fullWidth
                />
            {state.loading ?
                <LoadingButton loading variant="contained" fullWidth>LOADING</LoadingButton>
            :
                <Button variant="contained" onClick={onCheck} fullWidth>Comprobar</Button>
            }
            
            {state.error && 
                <Typography variant="h6" align="center" color='red'> Error: El código es incorrecto</Typography>
            }
        </Box>
    )} else if (state.confirmed && !state.deleted){
        return (
            <Box sx={{margin: 2, py:5}}>
                <Typography variant="h4" align="center"> Eliminar {name}</Typography>
                <Typography variant="h6" align="center"> ¿Seguro que quieres eliminar UseState?</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 2 }}>
                    <Button variant="outlined" color="warning" onClick={onDelete}>Eliminar</Button>
                    <Button variant="contained" onClick={onReset}>Volver</Button>
                </Box>
            </Box>
        )
    } else {
        return (
            <Box sx={{margin: 2, py:5}}>
                <Typography variant="h4" align="center"> Eliminado con éxito </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button variant="contained" onClick={onReset}>Volver</Button>
                </Box>
            </Box>
        )
    }
  }
  
  export { UseState } ;