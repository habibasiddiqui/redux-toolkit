import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import AddForm from './AddForm';
import { deleteTodo, editTodo } from '../store/TodoSlice';
import Title from './Title';


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
            <Title />

            <AddForm />
            {tasks.length > 0 ? (
                tasks.map(item => (
                    <div key={item.id}>{item.title}
                    
                    <button onClick={() => handleDelete(item.id)}>Del</button>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    </div>
                ))
            ) : (
                <p>No tasks left, yay!</p>
            )}
            
        </div>
    )
}

export default TodoList
// key={item.id}