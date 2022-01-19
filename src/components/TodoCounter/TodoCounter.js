import React from 'react';
import { Typography } from '@mui/material';

function TodoCounter({ completedTodos, totalTodos, loading }) {
    return (
        <Typography
            variant="h5"
            align="center"
            color={loading && '#d1d1d1'}
        >
            Has completado {completedTodos} de {totalTodos} TODOs
        </Typography>
    );
}

export { TodoCounter }