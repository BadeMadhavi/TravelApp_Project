import { useEffect, useLayoutEffect, useState } from "react";

function UselayOut(){
  const [number,setNumber]=useState(0)

  const handlechange=(e)=>{
      setNumber(e.target.value)
  }
  useEffect(()=>{
    console.log("UseEffect Executed"+number)
  },[number])

  
  useLayoutEffect(()=>{
    console.log("UseLayOutEffect Executed"+number)
  },[number])
    return(
        <div>
        <h1>Enter Number:{number}</h1>
        <input  onChange={handlechange} type="number" value={number} placeholder="Enter a number"/>
        </div>
    )
}
export default  UselayOut;