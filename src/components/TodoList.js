import React, { useState } from 'react'
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

    // set row bg color
    const alternatingColor = ['lightcyan', 'cornsilk'];

    // line-through on click
    // let [clicked, setClicked] = useState(false);
    // let computedClassName = clicked ? 'row-container-linethrough' : 'row-container';

    // const handleLineThrough = () => {
    //     setClicked(!clicked);
    // }

    return (
        <div>

            <AddForm />
            <Grid container spacing={1} justify='center' alignContent='center'>
                
                <Grid item xs={10} sm={10} md={8} lg={6} >
            {tasks.length > 0 ? (
                tasks.map((item, index) => (
                    <div className='row-container' key={item.id} style={{ backgroundColor: `${index % 2 ? alternatingColor[0] : alternatingColor[1]}` }}>
                        <span className='row-title'>{item.title}</span>
                        <span className='row-icon-container'>
                            <EditIcon className='icon row-icon edit' onClick={() => handleEdit(item)} />
                            <DeleteForeverIcon className='icon row-icon del' onClick={() => handleDelete(item.id)} />
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