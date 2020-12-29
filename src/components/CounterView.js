import React from 'react';
import { useSelector } from "react-redux";

function CounterView() {
    const counter = useSelector(state => state)

    return (
        <div>
            Counter Value: {counter}
        </div>
    )
}

export default CounterView
