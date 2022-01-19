import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const SECURITY_CODE = 'paradigma'

class ClassState extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:'',
            error:false,
            loading:false
        }    
    }

    componentDidUpdate() {
        if(this.state.loading)
        setTimeout(() => {
            if(this.state.value === SECURITY_CODE ){
                this.setState({loading:false, error:false})
            } else {
                this.setState({loading:false, error:true})
            }
        }, 3000)
    }

    render () {
        const { error, loading,value } = this.state
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
                        value={value}
                        onChange={(e) => {
                            this.setState({value: e.target.value})
                        }}
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
                        onClick={() => this.setState({loading:true})}
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
}
  
  export {ClassState};