import React from 'react';
import { Button } from '@mui/material';

function CreateTodoButton() {
    const OnClickButton = () => console.log('Click')

    return (
        <Button 
        variant="contained"
        onClick={OnClickButton}
        fullWidth>
            Create New Task
        </Button>
    )
}

export { CreateTodoButton }