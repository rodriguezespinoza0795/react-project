import React, { useState, useEffect  } from 'react';
import TextField from '@mui/material/TextField';


function TodoSearch({query, setQuery}) {    
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