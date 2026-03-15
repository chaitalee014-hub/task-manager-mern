import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/createIntern.css";

function CreateIntern(){

const navigate = useNavigate();

const [form,setForm] = useState({
name:"",
email:"",
password:"",
confirmPassword:"",
phone:""
});

const [showPassword,setShowPassword] = useState(false);

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleSubmit = async(e)=>{

e.preventDefault();

if(form.password !== form.confirmPassword){
alert("Passwords do not match");
return;
}

try{

await API.post("/users",{
name:form.name,
email:form.email,
password:form.password,
phone:form.phone
});

alert("Intern created and credentials sent via email");

navigate("/interns");

}catch(err){

alert(err.response?.data?.message || "Failed to create intern");

}

};

return(

<div className="create-intern-page">

<div className="create-card">

<h2>Create New Intern</h2>

<p className="form-desc">
Fill the details below to register a new intern in the internship system.
</p>

<form onSubmit={handleSubmit}>

<div className="form-row">

<div className="form-group">
<label>Name</label>
<input
name="name"
placeholder="Enter intern name"
onChange={handleChange}
required
/>
</div>

<div className="form-group">
<label>Email</label>
<input
name="email"
type="email"
placeholder="Enter intern email"
onChange={handleChange}
required
/>
</div>

</div>

<div className="form-row">

<div className="form-group password-field">

<label>Password</label>

<input
name="password"
type={showPassword ? "text" : "password"}
placeholder="Enter password"
onChange={handleChange}
required
/>

<span
className="eye-icon"
onClick={()=>setShowPassword(!showPassword)}
>
👁
</span>

</div>

<div className="form-group password-field">

<label>Confirm Password</label>

<input
name="confirmPassword"
type={showPassword ? "text" : "password"}
placeholder="Confirm password"
onChange={handleChange}
required
/>

</div>

</div>

<div className="form-group">

<label>Phone</label>

<input
name="phone"
placeholder="Enter phone number"
onChange={handleChange}
/>

</div>

<button className="btn-create">
Create Intern
</button>

</form>

</div>

</div>

)

}

export default CreateIntern;