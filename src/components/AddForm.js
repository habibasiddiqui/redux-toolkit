import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/TodoSlice';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, TextField, Grid } from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';

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
            <Grid container spacing={1} justify='center' alignContent='center'>
                
                    <Grid item xs={10} sm={10} md={8} lg={6} >
                    <form onSubmit={handleSubmit} style={{border: '1px solid black'}}>
                    <TextField
                        // fullWidth
                        className='input' 
                        type='text' 
                        variant='outlined'
                        pattern="[\s\S]*\S[\s\S]*" 
                        onChange={handleChange} 
                        label="My Task" />
                        {/* <Box textAlign='center'>
                        <Button className='submit' type='submit' variant="contained" color="primary">
                            Add
                            </Button> 
                        </Box> */}
                        <Box textAlign='center'>

                                <AddBoxIcon className='icon' type='submit' />
                        </Box> 
                            
                       
                    
                    </form>
                    </Grid>
            </Grid>

            {/* <form onSubmit={handleSubmit}>
                <TextField
                    // fullWidth
                    className='input' 
                    type='text' 
                    variant='outlined'
                    pattern="[\s\S]*\S[\s\S]*" 
                    onChange={handleChange} 
                    label="My Task" />
                    {/* <Box textAlign='center'> 
                       <Button className='submit' type='submit' variant="contained" color="primary">
                        Add
                        </Button> 
                        <AddBoxIcon className='icon' type='submit' />
                     </Box> 
                
            </form> */}
        </div>
    )
}

export default AddForm