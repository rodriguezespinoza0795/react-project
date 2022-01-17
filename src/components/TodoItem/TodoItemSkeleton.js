import React from 'react';
import { Skeleton } from '@mui/material';
import ListItem from '@mui/material/ListItem';

function TodoItemSkeleton() {
    return (
        <ListItem sx={{ display: 'flex', justifyContent: 'space-evenly', my: 2 }}>
            <Skeleton variant="circular" width={30} height={30} />
            <Skeleton variant="rectangular" width={180} height={30} />
            <Skeleton variant="circular" width={30} height={30} />
        </ListItem>
    )
}

export { TodoItemSkeleton }