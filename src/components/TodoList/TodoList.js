import React from 'react';
import { List, Paper, Box } from '@mui/material';

function TodoList({ query, error, onError, loading, searchedTodos, onLoading, onEmptyTodos, onEmptySearchResults, render, children, totalTodos }) {
    return (
        <Box sx={{ m: "2rem" }}>
            <Paper style={{ maxHeight: 500,minHeight: 500, overflow: 'auto' }}>
                <List >
                    {error && onError()}
                    {loading && onLoading()}
                    {(!loading && !totalTodos) && onEmptyTodos()}
                    {(!!totalTodos && !searchedTodos.length) && onEmptySearchResults(query)}
                    {searchedTodos.map(render || children)}
                </List>
            </Paper>
        </Box >
    )
}

export { TodoList }