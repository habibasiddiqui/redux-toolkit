import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/TodoSlice';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, TextField } from "@material-ui/core";

function AddForm() {

    const dispatch = useDispatch();
    // const tasks = useSelector(state => state);
    const [title, setTitle] = useState();

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            title, id: uuidv4()
        }));
        e.target.firstChild.value = '';
    }

    return (
        <div>
            
                    

            <form onSubmit={handleSubmit}>
                <TextField
                    // fullWidth
                    className='input' 
                    type='text' 
                    pattern="[\s\S]*\S[\s\S]*" 
                    onChange={handleChange} 
                    label="My Task" />
                    <Box textAlign='center'>
                       <Button className='submit' type='submit' variant="contained" color="primary">
                    Add
                </Button> 
                    </Box>
                
            </form>
        </div>
    )
}

export default AddForm