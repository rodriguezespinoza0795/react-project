import React from 'react';
import { TodoContext } from '../TodoContex'
import TextField from '@mui/material/TextField';


function TodoSearch() {
    const { query, setQuery } = React.useContext(TodoContext);  
    const onSearchValueChange = (e) => {
        setQuery(e.target.value)
    }
    return (
        <TextField 
        label="Search Task" 
        variant="standard" 
        fullWidth
        value={query}
        onChange={onSearchValueChange}/>
    );
}

export { TodoSearch }