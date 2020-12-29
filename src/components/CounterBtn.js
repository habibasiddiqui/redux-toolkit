// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { incAction, decAction } from '../store/Action';

// function CounterBtn() {
//     const dispatch = useDispatch();
    
//     return (
//         <div>
//             <button onClick={() => dispatch(incAction())}>+</button>
//             <button onClick={() => dispatch(decAction())}>-</button>
//         </div>
//     )
// }

// export default CounterBtn





//  USING createSlice


import React from 'react';
import { useDispatch } from 'react-redux';
import { incAction, decAction, incAction2 } from '../store/CounterSlice';

function CounterBtn() {
    const dispatch = useDispatch();
    
    return (
        <div>
            <button onClick={() => dispatch(incAction())}>+</button>
            <button onClick={() => dispatch(decAction())}>-</button>
            <button onClick={() => dispatch(incAction2())}>+2</button>

        </div>
    )
}

export default CounterBtn