import React,  { useState } from 'react';

const Counter = () => {
      // State to store count value
const [count, setCount] = useState(0);
// Function to increment count by 1
const incrementCount = () => {
  // Update state with incremented value
  setCount(count + 1);
};
const decrementCount = () =>{
    setCount(count - 1);
    if(count <= 0){
        count = 0
    }
}
  return (
    <div className='counter-div d-flex justify-content-between'>  
        <button onClick={decrementCount}>-</button>
        <div className='count-number'>
        {count}
        </div>
        <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default Counter