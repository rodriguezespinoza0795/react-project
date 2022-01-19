import React from 'react'
import { useStorageListener } from '../../customHooks/useStorageListener';
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const style = {

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize)
    if (show) {
        return (
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                    Hubo cambios
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 2 }}>
                    <Button
                        variant="outlined"
                        onClick={toggleShow}>
                        Volver a cargar la información
                    </Button>
                </Box>
            </Box>
        );
    } else {
        return null;
    }
}

export { ChangeAlert }