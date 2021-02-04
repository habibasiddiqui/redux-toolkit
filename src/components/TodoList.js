import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import AddForm from './AddForm';
import { deleteTodo, editTodo } from '../store/TodoSlice';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Grid } from '@material-ui/core';

function TodoList() {
    const tasks = useSelector(state => state);
    // console.log(tasks)

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        // console.log(id)
        dispatch(deleteTodo(id));
    }
    // console.log('after delete:', tasks);

    const handleEdit = ({id, title}) => {
        let edited = prompt("Enter task", title);
        dispatch(editTodo({id, edited}));
    }
    // console.log('after edit:', tasks);
    return (
        <div>

            <AddForm />
            <Grid container spacing={1} justify='center' alignContent='center'>
                
                <Grid item xs={10} sm={10} md={8} lg={6} >
            {tasks.length > 0 ? (
                tasks.map(item => (
                    <div className='item-container' key={item.id}>
                        <span className='item-title'>{item.title}</span>
                        <span className='item-icon-container'>
                            <DeleteForeverIcon className='icon row-icon' onClick={() => handleDelete(item.id)} />
                            <EditIcon className='icon row-icon' onClick={() => handleEdit(item)} />

                        </span>
                        
                    </div>
                ))
            ) : (
                <p>No tasks left, yay!</p>
            )}
            </Grid>
            </Grid>
            
        </div>
    )
}

export default TodoList
// key={item.id}