import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/TodoSlice';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, TextField, Grid, Tooltip } from "@material-ui/core";
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

function AddForm() {

    const dispatch = useDispatch();
    const [title, setTitle] = useState();

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            title, id: uuidv4()
        }));
        // console.log(e.target.childNodes[0].childNodes[1].childNodes[0])
        e.target.childNodes[0].childNodes[1].childNodes[0].value = '';
    }


    return (
        <div>
                    <form onSubmit={handleSubmit} style={{textAlign:"center", marginBottom: '30px'}} >
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
            
                        <Box textAlign='center'>
                            <Tooltip title="Add">
                                <Button type='submit' >
                                    <AddBoxOutlinedIcon className='icon' />
                                </Button>
                            </Tooltip>  
                        </Box> 
                            
                    
                    </form>
        
        </div>
    )
}

export default AddForm