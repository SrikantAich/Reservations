import { useEffect } from "react"
import React  from 'react'

function Component1() {

    useEffect(()=>{
        console.log("Comp 1 is mounted")
    },[])

    useEffect(()=>{
        return()=>{
            console.log("Comp 1 is unmounted")
        }
       
    },[])


  return (
    <div>Component1</div>
  )
}

export default Component1