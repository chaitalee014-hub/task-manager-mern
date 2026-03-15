import { useState } from "react";
import API from "../services/api";
import { useParams,useNavigate } from "react-router-dom";
import "../styles/Tasks.css";

function SubmitTask(){

const {id} = useParams();

const navigate = useNavigate();

const [githubLink,setGithubLink] = useState("");
const [submissionLink,setSubmissionLink] = useState("");

const handleSubmit = async(e)=>{

e.preventDefault();

try{

await API.put(`/tasks/submit/${id}`,{
githubLink,
submissionLink
});

alert("Task submitted successfully");

navigate("/tasks");

}catch(err){

alert("Submission failed");

}

};

return(

<div className="tasks-page">

<h2>Submit Task</h2>

<form className="task-form" onSubmit={handleSubmit}>

<input
placeholder="GitHub Repository Link"
value={githubLink}
onChange={(e)=>setGithubLink(e.target.value)}
required
/>

<input
placeholder="Deployment Link"
value={submissionLink}
onChange={(e)=>setSubmissionLink(e.target.value)}
required
/>

<button type="submit">
Submit Task
</button>

</form>

</div>

)

}

export default SubmitTask;