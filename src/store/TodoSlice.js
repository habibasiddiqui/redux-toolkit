import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: 'todoList',
    initialState: [
        // {
        //     title: 'first task',
        //     id: 1
        // },
        // {
        //     title: 'first taskfirst taskfirst taskfirst taskfirst taskfirst taskfirst task',
        //     id: 2
        // }
        // 'first'   
    ],
    reducers: {
        // addTodo: (state, action) => {
        //     // console.log(state, action)
        //     return [...state, action.payload]
        // },
        addTodo(state, action) {
            // console.log(state, action)
            return [...state, action.payload]
        },
        deleteTodo(state, action) {
            // console.log(".....",action.payload)
            const newTasks = state.filter(item => item.id != action.payload)
            return newTasks;
        },
        editTodo(state, action) {
            // console.log(action)
            // const updated = [...state];
            const updatedTasks = state.find(item => {
                if(item.id == action.payload.id)
                    item.title=action.payload.edited
            })
            return updatedTasks
        },
        
    }
});
export const { addTodo, deleteTodo, editTodo } = listSlice.actions;

export default listSlice.reducer;