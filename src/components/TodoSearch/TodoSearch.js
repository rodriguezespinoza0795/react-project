import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';

function TodoSearch({ query, setQuery, loading }) {
    const onSearchValueChange = (e) => {
        setQuery(e.target.value)
    }
    return (
        <Box sx={{margin: 2}}>
            <TextField 
            label="Search" 
            type="search" 
            fullWidth
            value={query}
            onChange={onSearchValueChange}
            disabled={loading}
            />
        </Box>
    );
}

export { TodoSearch }