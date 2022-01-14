import React from 'react';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';




function TodoItem(props) {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={props.completed}
                    />
                </ListItemIcon>
                <ListItemText primary={props.text} />
            </ListItemButton>
        </ListItem>

    );
}

export { TodoItem }