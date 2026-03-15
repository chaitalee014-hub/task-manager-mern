import { useEffect,useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/InternList.css";

function InternList(){

const [interns,setInterns] = useState([]);
const navigate = useNavigate();

useEffect(()=>{
fetchInterns();
},[]);

const fetchInterns = async()=>{

try{

const res = await API.get("/users");
setInterns(res.data);

}catch(err){
console.error(err);
}

};

const deleteIntern = async(id)=>{

if(!window.confirm("Delete this intern?")) return;

try{

await API.delete(`/users/${id}`);
fetchInterns();

}catch(err){

alert("Failed to delete");

}

};

return(

<div className="intern-list-page">

<h2>Intern List</h2>

<table>

<thead>

<tr>
<th>Name</th>
<th>Email</th>
<th>Intern ID</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{interns.map(user=>(

<tr key={user._id}>

<td>{user.name}</td>
<td>{user.email}</td>
<td>{user.internId}</td>

<td>

<button
className="update-btn"
onClick={()=>navigate(`/update-intern/${user._id}`)}
>
Update
</button>

<button
className="delete-btn"
onClick={()=>deleteIntern(user._id)}
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default InternList;