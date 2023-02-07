import React ,{useState} from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import {CSVLink} from 'react-csv'

function App() {
  const [data,setData] = useState([]);

  const updateTask = (id,newTitle) => {
    const newvalue=[...data];
    newvalue[id-1].title= newTitle;
    
    setData(newvalue);
  }

  const deleteTask = (id) => {
    console.log(id)
    const newvalue = [...data]
    newvalue.splice(id, 1);
    setData(newvalue)
  
  }

  const moveTask = (id,stat) => {
    console.log(id)
    const newvalue=[...data];

    let newStatus = "";

    if (stat === "progress") {
      newStatus = "finished";
      newvalue[id-1].status=newStatus;
      setData(newvalue)
    } else if (stat === "finished") {
      newStatus = "backlog";
      newvalue[id-1].status=newStatus;
      setData(newvalue)
    }
    else{
      newStatus = "progress";
      newvalue[id-1].status=newStatus;
      setData(newvalue)
    }




  }

  const addTask = (newTitle) => {
    const newattributes = {};
    const newvalue = [...data]
    const lastTask = data[data.length - 1]

    if (lastTask !== undefined) {
      let newTaskId = lastTask.id + 1;
      newattributes.id=newTaskId;
    }
    else{
      newattributes.id=1;
    }
    
    newattributes.title=newTitle;
    newattributes.status='backlog'
    newvalue.push(newattributes)
    setData(newvalue);
  }
  return (
   <>
   <div class="table-wrapper">
    <CSVLink data={data}>
      <button>Export Data to Excel</button></CSVLink><br/>
   <AddTask click={addTask}/>
      <table  class="fl-table">
        
          <tr>
            <th>Backlog</th>
            <th>In Progress</th>
            <th>Finished</th>
          </tr>
        
              <tr>
                
                <td>{data.filter(d => d.status === 'backlog').map((val,index)=> {return(<Tasks key={index} id={val.id} title={val.title} update={updateTask} deleteTask={deleteTask} move={moveTask} status={val.status}/>)  })}</td> 
               
              
                 <td>{data.filter(d => d.status === 'progress').map((val,index)=> {return(<Tasks key={index}  id={val.id} title={val.title} update={updateTask} deleteTask={deleteTask} move={moveTask} status={val.status}/>) })}</td> 
                
               
              <td>{data.filter(d => d.status === 'finished').map((val,index)=> { return(<Tasks key={index} id={val.id} title={val.title} update={updateTask} deleteTask={deleteTask} move={moveTask} status={val.status}/>)  })}</td> 
              
              </tr>
        
       
        
           
        
    </table>
    </div>
   </>
  );
}

export default App;
