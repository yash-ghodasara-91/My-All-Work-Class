import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../features/TodoSlice';
import { useState } from 'react';

const TodoRedux = () => {

    const [name ,setname] = useState("")
    const [subject ,setSubject] = useState("")

const dispatch = useDispatch()

const data = useSelector((state) =>{
    return state.todoKey.data
});

const handleAddData = ()=>{
    let obj ={id:Date.now(), name, subject}
    dispatch(addData(obj))
    setname("")
    setSubject("")
}

  return (
    <div>
      <h1>TodoRedux</h1>
      <input type="text" placeholder='Enter Your Name' onChange={(e)=> setname(e.target.value)} value={name}/>
      <input type="text" placeholder='Enter Your Subject' onChange={(e)=> setSubject(e.target.value)} value={subject}/>
      <button onClick={handleAddData}>Add Data</button>

      {
        data &&
        data.map((e,i)=>{
            return <ul key={i}>
                <li>{i+1}</li>
                <li>{e.name}</li>
                <li>{e.subject}</li>
                <button>Delete</button>
                <button>Edit</button>
            </ul>
        })
      }
    </div>  
  )
}

export default TodoRedux
