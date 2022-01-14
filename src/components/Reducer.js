import React, { useReducer } from 'react';

const initialState = 1;
const reducer = (state, action) => {
    switch (action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default :
            return state;
    }
}

export default function Reducer() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div className='flex w-full justify-center mt-20 text-3xl font-bold'>Count : {count}</div>
            <div className='flex w-full justify-center mt-2'>
            <button type='button' onClick={() => dispatch('increment')} className='p-1 px-3 mr-3 bg-slate-400'>Increment</button>
            <button type='button' onClick={()=>dispatch('decrement')} className='p-1 px-3 bg-slate-400'>Decrement</button>
            </div>
        </div>
    )
}
