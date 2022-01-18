import React from 'react';
import { List, Paper, Box } from '@mui/material';

function TodoList({ error, onError, loading, searchedTodos, onLoading, onEmptyTodos, render, children }) {
    return (
        <Box sx={{ m: "2rem" }}>
            <Paper style={{ maxHeight: 500,minHeight: 500, overflow: 'auto' }}>
                {error && onError()}
                {loading && onLoading()}
                {(!loading && !searchedTodos.length) && onEmptyTodos()}
                {searchedTodos.map(render)}
                <List >
                    {children}
                </List>
            </Paper>
        </Box >
    )
}

export { TodoList }