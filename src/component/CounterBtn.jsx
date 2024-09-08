import React from 'react';
import Counter from './Counter';
import { useDispatch } from 'react-redux';

const CounterBtn = () => {

   let dispatch = useDispatch();

  return (
    <div className='counter-btn'>
        <div>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>increment</button>
        </div>
        <Counter/>
        <div>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>decrement</button>
        </div>
    </div>
  )
}

export default CounterBtn