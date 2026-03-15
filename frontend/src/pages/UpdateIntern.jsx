import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/UpdateIntern.css";

function UpdateIntern(){

const {id} = useParams();
const navigate = useNavigate();

const [form,setForm] = useState({
name:"",
email:"",
phone:""
});

useEffect(()=>{
fetchIntern();
},[]);

const fetchIntern = async()=>{

try{

const res = await API.get(`/users/${id}`);
setForm(res.data);

}catch(err){

console.error(err);

}

};

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleSubmit = async(e)=>{

e.preventDefault();

try{

await API.put(`/users/${id}`,form);

alert("Intern updated successfully");

navigate("/interns");

}catch(err){

alert("Update failed");

}

};

return(

<div className="update-page">

<div className="update-card">

<h2>Update Intern</h2>

<form onSubmit={handleSubmit}>

<input
name="name"
value={form.name}
onChange={handleChange}
placeholder="Name"
required
/>

<input
name="email"
value={form.email}
onChange={handleChange}
placeholder="Email"
required
/>

<input
name="phone"
value={form.phone}
onChange={handleChange}
placeholder="Phone"
/>

<button type="submit">
Update Intern
</button>

</form>

</div>

</div>

)

}

export default UpdateIntern;