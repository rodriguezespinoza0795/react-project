import React from 'react'
import { withStorageListener } from './withStorageListener';
import { Box, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import zIndex from '@mui/material/styles/zIndex';

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


function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }