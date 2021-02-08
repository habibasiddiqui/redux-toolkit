import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import AddForm from './AddForm';
import { deleteTodo, editTodo } from '../store/TodoSlice';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Grid, Tooltip } from '@material-ui/core';


function TodoList() {
    const tasks = useSelector(state => state);
    // console.log(tasks)

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        // console.log(id)
        dispatch(deleteTodo(id));
    }

    const handleEdit = ({id, title}) => {
        let edited = prompt("Enter task", title);
        dispatch(editTodo({id, edited}));
    }

    // set row bg color
    const alternatingColor = [ 'silver', 'lightseagreen'];
    // const alternatingColor = [ 'lightpink', 'lightgrey'];


    // line-through on click
    let [clicked, setClicked] = useState(false);
    let computedClassName = clicked ? 'row-container-linethrough' : 'row-container';
    let [key, setKey] = useState('');
    const handleLineThrough = (e) => {
        // console.log(e.target);
        // setKey(e.target.dataKey);
        // setClicked(!clicked);

        // e.target.style.textDecoration = clicked ? 'line-through' : 'none';
        // console.log(clicked);
    }


    return (
        <div>

            <AddForm />
            {tasks.length > 0 ? (
                tasks.map((item, index) => (
                    <div className='row-container' onClick={handleLineThrough} key={item.id} data-key={item.id} style={{ backgroundColor: `${index % 2 ? alternatingColor[0] : alternatingColor[1]}` }}>
                        <span className='row-title'>{item.title}</span>
                        <span className='row-icon-container'>
                            <Tooltip title="Edit">
                                <EditIcon className='icon row-icon edit' onClick={() => handleEdit(item)} />
                            </Tooltip>
                            <Tooltip title="Delete">
                                <DeleteForeverIcon className='icon row-icon del' onClick={() => handleDelete(item.id)} />
                            </Tooltip>
                        </span>    
                    </div>
                ))
            ) : (
                <p className="free">No tasks left, yay!</p>
            )}

                      
        </div>
    )
}

export default TodoList
// key={item.id}