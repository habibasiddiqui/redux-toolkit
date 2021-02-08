import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/TodoSlice';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, TextField, Grid } from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

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
        console.log(e.target.childNodes[0].childNodes[1].childNodes[0])
        e.target.childNodes[0].childNodes[1].childNodes[0].value = '';
    }


    return (
        <div>
            <Grid container spacing={1} justify='center' alignContent='center'>
                
                    <Grid item xs={10} sm={10} md={8} lg={6} >
                    <form onSubmit={handleSubmit} >
                    <TextField
                        // fullWidth
                        className='input' 
                        type='text' 
                        variant='outlined'
                        onChange={handleChange} 
                        label="My Task"
                        // inputProps={{pattern: ".*\S+.*"}}
                        // inputProps={ {pattern: "[\s\S]*\S[\s\S]*"} }
                        // inputProps={ {pattern:"^[a-zA-Z1-9].*"} }
                        // inputProps={ {pattern: "\S(.*\S)?"} }
                        
                        // helperText="Can not be empty" 
                        />
                        {/* <Box textAlign='center'>
                        <Button className='submit' type='submit' variant="contained" color="primary">
                            Add
                            </Button> 
                        </Box> */}
                        <Box textAlign='center'>

                                {/* <AddBoxIcon className='icon' type='submit' />
                                <AddCircleOutlineIcon className='icon' type='submit' /> */}
                                <Button type='submit' ><AddBoxOutlinedIcon  className='icon' /></Button>
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