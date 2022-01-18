import React from 'react';
import { Button } from '@mui/material';

function CreateTodoButton({ handleOpen }) {
    return (
        <Button 
        variant="contained"
            onClick={handleOpen}
        fullWidth>
            Create New Task
        </Button>
    )
}

export { CreateTodoButton }