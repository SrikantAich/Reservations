import React, { useEffect } from 'react'
import { useState } from 'react'


function Component2() {
    const [count,setCount]=useState(0)
    // useEffect(()=>{console.log("comp is rendering")},[])
    useEffect(()=>{console.log("comp is re rendering")},[count])



  return (
    <div>Component2
        <p>{count}</p>
        <button onClick={()=>{setCount(prev=>prev+1)}}>Button</button>
    </div>

  )
}

export default Component2