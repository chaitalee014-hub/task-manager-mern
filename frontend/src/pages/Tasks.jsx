import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/Tasks.css";

function Tasks(){

const [tasks,setTasks] = useState([]);
const navigate = useNavigate();

const user = JSON.parse(localStorage.getItem("user"));

useEffect(()=>{

fetchTasks();

},[]);


const fetchTasks = async()=>{

try{

const res = await API.get("/tasks");

setTasks(res.data);

}catch(err){

console.log(err);

}

};


const reviewTask = async(id,status)=>{

const feedback = prompt("Enter feedback");

try{

await API.put(`/tasks/review/${id}`,{
status,
feedback
});

fetchTasks();

}catch(err){

alert("Review failed");

}

};


return(

<div className="tasks-page">

<h2>Tasks</h2>

{user.role === "admin" && (

<button
className="create-task-btn"
onClick={()=>navigate("/create-task")}
>
Create Task
</button>

)}

{tasks.map(task=>(

<div key={task._id} className="task-card">

<h3>{task.title}</h3>

<p>{task.description}</p>

<p className={`status ${task.status}`}>
Status: {task.status}
</p>

<p>
Deadline: {task.deadline?.slice(0,10)}
</p>

{user.role === "admin" && (

<p>
Intern: {task.intern?.name} ({task.intern?.internId})
</p>

)}

{task.githubLink && (

<p>
GitHub:
<a href={task.githubLink} target="_blank">
View Code
</a>
</p>

)}

{task.submissionLink && (

<p>
Project:
<a href={task.submissionLink} target="_blank">
Live Demo
</a>
</p>

)}

{task.submittedAt && (

<p>
Submitted:
{new Date(task.submittedAt).toLocaleString()}
</p>

)}

{task.feedback && (

<p className="feedback">
Feedback: {task.feedback}
</p>

)}

{user.role === "intern" && task.status === "pending" && (

<button
onClick={()=>navigate(`/submit-task/${task._id}`)}
>
Submit Task
</button>

)}

{user.role === "admin" && task.status === "submitted" && (

<div className="review-buttons">

<button
onClick={()=>reviewTask(task._id,"completed")}
className="complete-btn"
>
Mark Complete
</button>

<button
onClick={()=>reviewTask(task._id,"rejected")}
className="reject-btn"
>
Reject
</button>

</div>

)}

</div>

))}

</div>

)

}

export default Tasks;