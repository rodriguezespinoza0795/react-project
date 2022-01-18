import React from 'react';
import { Typography } from '@mui/material';

function TodoCounter({ completedTodos, totalTodos }) {
    return (
        <Typography
            variant="h5"
            align="center"
        >
            Has completado {completedTodos} de {totalTodos} TODOs
        </Typography>
    );
}

export { TodoCounter }