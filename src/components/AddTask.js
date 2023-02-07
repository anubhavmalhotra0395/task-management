import React,{useState} from 'react'

const AddTask = ({click}) => {
    const[newTitle,setNewTitle]=useState('')
  return (
    <>
    <input type='text' onChange={(e)=>setNewTitle(e.target.value)} value={newTitle}/>
    <button onClick={()=>{click(newTitle);setNewTitle('')}}>Add Task</button>
    </>
  )
}

export default AddTask