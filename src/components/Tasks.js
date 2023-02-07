import React,{useState} from 'react'

const Tasks = ({key,id,title,update,deleteTask,move,status}) => {
    const[showInput,setShowInput]=useState(false)
    const[newTitle,setNewTitle]=useState('')
  return (
    <>
        <div key={key}>
            <p>{title}</p>
            <button onClick={()=>setShowInput(!showInput)}>Edit</button>
            {showInput?<div><input type='text' onChange={(e)=>setNewTitle(e.target.value)} value={newTitle}/><button onClick={()=> {update(id,newTitle);setShowInput(!showInput)}}>Update</button></div>:''}
            <button onClick={()=> deleteTask(key)}>Delete</button>
            <button onClick={()=> move(id,status)}>Move</button>
        </div>
    </>
  )
}

export default Tasks