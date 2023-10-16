import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

function Counter() {

    const [amount,setAmount] = useState("")
    const dispatch = useDispatch() // useDispatch, useSelector this are hooks
    const count = useSelector((state)=>state.counter.count) // ithile state enn kodukkumbol stateilek varunnath store aayirikum.so aa storeile .counter.count edukkkuka.i.e .counter edukkumbol counterSlice reducer kittum. then athile .count means athile state
    const handleIncrement = () =>{
      if(amount==""){
        alert("Please provide amount")
      }else{
        // dispatch action
        dispatch(incrementByAmount(Number(amount)))
      }
    }
    return (
    <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-center align-items-center border rounded p-5 w-25 flex-column'>
            <h1 style={{fontSize:'100px'}}>{count}</h1>
            <div className='d-flex justify-content-between w-100 mt-5'>
                <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
                <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>

            </div>
            <div className='d-flex justify-content-between w-100 mt-5'>
              <input onChange={(e)=>setAmount(e.target.value)} className='form-control'type="text" placeholder='Enter amount to be incremented'/>
              <button onClick={handleIncrement} className='btn btn-success'>Increment By Amount</button>
            </div>

        </div>

    </div>
  )
}

export default Counter