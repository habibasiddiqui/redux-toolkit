import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/TodoSlice';
import { v4 as uuidv4 } from 'uuid';
import { Grid, TextField } from "@material-ui/core";

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
            <Grid container>
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    {/* <TextField error label="My Task" />
                    <TextField
                    error
                    id="standard-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    /> */}
                </Grid>
            </Grid>
            <form onSubmit={handleSubmit}>
                <input type='text'onChange={handleChange}></input>
                
                <button type='submit'>Add</button>
                {/* <button onClick={() => handleDeleteAll}>Delete All</button> */}
                
            </form>
        </div>
    )
}

export default AddForm
// onChange={handleChange}