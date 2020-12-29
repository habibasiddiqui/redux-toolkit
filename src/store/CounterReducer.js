import { createReducer } from "@reduxjs/toolkit";
import { decAction, incAction } from "./Action";

const CounterReducer = createReducer(0, {
    [incAction]: state => state + 1,
    [decAction]: state => state - 1
})

export default CounterReducer;