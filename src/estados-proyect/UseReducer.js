import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const SECURITY_CODE = 'paradigma'

function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const onConfirm = () => dispatch({ type: actionTypes.CONFIRM })
    const onError = () => dispatch({ type: 'ERROR' })
    const onWrite = (e) => dispatch({ type: actionTypes.WRITE, payload: e.target.value })
    const onCheck = () => dispatch({ type: actionTypes.CHECK })
    const onDelete = () => dispatch({ type: actionTypes.DELETE })
    const onReset = () => dispatch({ type: actionTypes.RESET })

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
                onChange={onWrite}
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


const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted:false,
    confirmed:false
}

const actionTypes = {
    CONFIRM: 'CONFIRM',
    ERROR: 'ERROR',
    CHECK: 'CHECK',
    DELETE: 'DELETE',
    RESET: 'RESET',
    WRITE: 'WRITE',
}

const reducerObject = (state, payload) => ({ 
    [actionTypes.CONFIRM]: { ...state, error: false, loading: false, confirmed: true, value: '' },
    [actionTypes.ERROR]: { ...state, error: true, loading: false },
    [actionTypes.CHECK]: { ...state, loading: true },
    [actionTypes.DELETE]: { ...state, deleted: true },
    [actionTypes.RESET]: { ...state, confirmed: false, deleted: false },
    [actionTypes.WRITE]: { ...state, value: payload }
})

const reducer = (state, action) => {
    if(reducerObject(state)[action.type]){
        return reducerObject(state, action.payload)[action.type]
    } else {
        return state
    }
}

export { UseReducer } ;