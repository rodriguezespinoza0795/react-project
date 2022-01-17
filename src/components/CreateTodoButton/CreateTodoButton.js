import React from 'react';
import { TodoContext } from '../TodoContex'
import { Button } from '@mui/material';

function CreateTodoButton() {
    const { handleOpen } = React.useContext(TodoContext);
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