import { createSlice } from '@reduxjs/toolkit';

const CounterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        incAction: state => state + 1,
        decAction: state => state - 1,
        incAction2: state => state + 2

    }
});

export const { incAction, decAction, incAction2 } = CounterSlice.actions;
export default CounterSlice.reducer;