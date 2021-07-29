import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  
  const [task,setTask] = useState("");
  //const [taskArray , setTaskArray] = useState([]);
  const [taskArray, settaskArray] = useState([]);
  const[task1,setTask1] = useState("");
  const handleChange = (e) =>{
    setTask(e.target.value);
  };
  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        value: task
      };
      settaskArray([...taskArray, taskDetails]); //spread operator 
      document.getElementById("text").value = "";
    }
  };
  const deleteTask = (e,value) => {
   // console.log(value);
    settaskArray(taskArray.filter((t,ind)=> ind != value));
  }
  // const handleTask1 = (e) =>{
  //   setTask1(e.target.value);
  // }
  const UpdateTask = (e,index) =>{
    if(task !== "")
    {
      const detail = task;
      taskArray[index].value = detail;
     // settaskArray(taskArray);
      settaskArray(taskArray.filter((t)=> t.index != -1));
      document.getElementById("text1").value = "";
      //agar mai seedhe setter class krke usme dalu to ku nhi chal rha
    }
    
  }

  return (
    <div className="App">
      <input type="text" name = "text" id = "text" onChange={e=> handleChange(e)} placeholder="add task"></input>
      <button className = "add-button" onClick={AddTask}> Add</button>
      <br />
      {taskArray !== [] ? (
        <ul>
          {taskArray.map((t,index) =>
          <li className = "item"> {t.value}
          <button className = "delete" onClick={ (e) =>deleteTask(e,index) }>Delete</button>
          <input type = "text" name = "text1" id = "text1" onChange={e=> handleChange(e)} placeholder = "type to update"></input>
          <button className = "update-button" onClick={ (e) => UpdateTask(e,taskArray.indexOf(t))}>Update</button>
          </li>
          )}
        </ul>
      ) : null}
    </div>
  );
}

export default App;
