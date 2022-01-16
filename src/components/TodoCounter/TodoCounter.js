import React from 'react';
import { TodoContext } from '../TodoContex'
import { Typography } from '@mui/material';

function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext);
    return (
        <Typography variant="h5" align="center">Has completado {completedTodos} de {totalTodos} TODOs</Typography>
    );
}

export { TodoCounter }