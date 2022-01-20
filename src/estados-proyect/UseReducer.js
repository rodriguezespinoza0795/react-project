import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const SECURITY_CODE = 'paradigma'

function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    
    React.useEffect(() => {
        if (!!state.loading)
        setTimeout(() => {
            state.value === SECURITY_CODE ? dispatch({type:'CONFIRM'}) : dispatch({type:'ERROR'})
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
                onChange={(e) => dispatch({type:'WRITE', payload:e.target.value})}
                fullWidth
                />
            {state.loading ?
                <LoadingButton loading variant="contained" fullWidth>LOADING</LoadingButton>
            :
                <Button variant="contained" onClick={() => dispatch({type:'CHECK'})} fullWidth>Comprobar</Button>
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
                    <Button variant="outlined" color="warning" onClick={() => dispatch({type:'DELETE'})}>Eliminar</Button>
                    <Button variant="contained" onClick={() => dispatch({type:'RESET'})}>Volver</Button>
                </Box>
            </Box>
        )
    } else {
        return (
            <Box sx={{margin: 2, py:5}}>
                <Typography variant="h4" align="center"> Eliminado con éxito </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button variant="contained" onClick={() => dispatch({type:'RESET'})}>Volver</Button>
                </Box>
            </Box>
        )
    }
  }


const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted:false,
    confirmed:false
}

const reducerObject = (state, payload) => ({ 
    CONFIRM :{...state,error: false,loading: false,confirmed:true, value:''},
    ERROR : {...state,error: true,loading: false},
    CHECK :{...state,loading: true},
    DELETE :{...state,deleted: true},
    RESET :{...state,confirmed: false,deleted: false},
    WRITE :{...state, value: payload}
})

const reducer = (state, action) => {
    if(reducerObject(state)[action.type]){
        return reducerObject(state, action.payload)[action.type]
    } else {
        return state
    }
}

export { UseReducer } ;