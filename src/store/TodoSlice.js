import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: 'todoList',
    initialState: [
        {
            title: 'first',
            id: 1
        }
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
        // deleteAll(state) {
        //     const emptyList = []
        //     return emptyList;

        // }
        
        // deleteAll: state => state=['kll']
     
    }
});
export const { addTodo, deleteTodo, editTodo, deleteAll } = listSlice.actions;

export default listSlice.reducer;