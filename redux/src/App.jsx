import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, increment5, incrementbyAmount } from './redux/features/counterSlice'
import { useState } from 'react'
const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)
  const [num, setNum] = useState(5);
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={()=>{
         dispatch(increment());
      }}>
        Increment
      </button>

      <button onClick={()=>{
         dispatch(decrement());
      }}>Decrement
      </button>

      <button 
      onClick={()=>{
        dispatch(increment5());
      }}>Increase by 5 </button>
     
     <input value={num}  type='number' onChange={(e)=>{
          setNum(e.target.value);
     }} />
      <button 
      onClick={()=>{
        dispatch(incrementbyAmount(Number(num)));
      }}>
        Increase by Amount
      </button>
    </div>
  )
}

export default App
