// import { configureStore } from "@reduxjs/toolkit";
// import CounterReducer from "./CounterReducer";

// const store = configureStore({
//     reducer: CounterReducer
// })

// export default store;



//  USING createSlice

// import { configureStore } from "@reduxjs/toolkit";
// import CounterSlice  from "./CounterSlice";

// const store = configureStore({
//     reducer: CounterSlice
// })

// export default store;







// todo list using toolkit and Slice



import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./TodoSlice";

const store = configureStore({
    reducer: listSlice
})

export default store;