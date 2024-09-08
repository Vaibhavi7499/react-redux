import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
   let count = useSelector((state)=>{
return state
    })

  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default Counter