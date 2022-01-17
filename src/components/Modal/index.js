import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TodoContext } from '../TodoContex'
import TextareaAutosize from '@mui/base/TextareaAutosize';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function BasicModal() {
    const { handleClose, open, addTodo } = React.useContext(TodoContext);
    const [text, setText] = useState("");
    const handleSubmit = () => {
        addTodo(text)
        handleClose()
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                        New Task
                    </Typography>
                    <TextareaAutosize
                        sx={{ my: 4 }}
                        aria-label="empty textarea"
                        placeholder="New Task"
                        minRows={3}
                        style={{ width: 300 }}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 2 }}>
                        <Button
                            variant="outlined"
                            color="warning"
                            onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSubmit}>
                            Create
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export { BasicModal }