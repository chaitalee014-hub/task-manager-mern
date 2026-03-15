import { useState,useEffect } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/Tasks.css";

function CreateTask(){

const navigate = useNavigate();

const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [intern,setIntern] = useState("");
const [deadline,setDeadline] = useState("");
const [interns,setInterns] = useState([]);

useEffect(()=>{

API.get("/users").then(res=>{
setInterns(res.data);
});

},[]);

const handleSubmit = async(e)=>{

e.preventDefault();

try{

await API.post("/tasks",{
title,
description,
intern,
deadline
});

alert("Task created");

navigate("/tasks");

}catch(err){

alert("Task creation failed");

}

};

return(

<div className="tasks-page">

<h2>Create Task</h2>

<form className="task-form" onSubmit={handleSubmit}>

<input
placeholder="Task Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
required
/>

<textarea
placeholder="Task Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<select
value={intern}
onChange={(e)=>setIntern(e.target.value)}
required
>

<option value="">Select Intern</option>

{interns.map(i=>(
<option key={i._id} value={i._id}>
{i.name} ({i.internId})
</option>
))}

</select>

<input
type="date"
value={deadline}
onChange={(e)=>setDeadline(e.target.value)}
/>

<button type="submit">
Assign Task
</button>

</form>

</div>

)

}

export default CreateTask;