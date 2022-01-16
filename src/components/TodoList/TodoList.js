import React from 'react';
import { List, Paper, Box } from '@mui/material';

function TodoList(props) {
    return (
        <Box sx={{ m: "2rem" }}>
            <Paper style={{ maxHeight: 500,minHeight: 500, overflow: 'auto' }}>
                <List >
                    {props.children}
                </List>
            </Paper>
        </Box >
    )
}

export { TodoList }