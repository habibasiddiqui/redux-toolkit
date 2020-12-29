import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteAll } from '../store/TodoSlice';
import { v4 as uuidv4 } from 'uuid';

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

    const handleDeleteAll = () => {
        dispatch(deleteAll());
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text'onChange={handleChange}></input>
                <button type='submit'>Add</button>
                <button onClick={() => handleDeleteAll}>Delete All</button>
                
            </form>
        </div>
    )
}

export default AddForm
// onChange={handleChange}