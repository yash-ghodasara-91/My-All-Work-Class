import React, { useState } from 'react'

const UseState = () => {

    const [count,setCount] = useState(0);
    // const [name,setName] = useState("");

    // const updateCount = ()=> {
    //     setCount(count+10)
    //     setName("Yash")
    // }
  return (
    <div>
      <h1>Yash Ghodasara</h1>
      <h1>{count}</h1>
      <h1>{name}</h1>
      {/* <button onClick={updateCount}>Update Count</button> */}
      <button onClick={()=>setCount(count+1)}>Update Count</button>

    </div>
  )
}

export default UseState
