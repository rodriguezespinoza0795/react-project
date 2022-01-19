import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';


class ClassState extends React.Component {
    constructor(props){
        super(props);
        this.state={
            error:false,
            loading:false
        }    
    }

    componentDidUpdate() {
        if(this.state.loading)
        setTimeout(() => {
            this.setState({loading:false})
        }, 3000)
    }

    render () {
        return (
                <Box sx={{margin: 2, py:5}}>
                    <Typography
                        variant="h4"
                        align="center">
                    Eliminar {this.props.name}
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
                    {this.state.loading ?
                        <LoadingButton 
                        loading
                        variant="contained"
                        fullWidth>
                        LOADING
                        </LoadingButton>
                    :
                        <Button
                        variant="contained"
                        onClick={() => this.setState({loading:true})}
                        fullWidth>
                        Comprobar
                        </Button>
                    }
                    {this.state.error && (
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
}
  
  export {ClassState};