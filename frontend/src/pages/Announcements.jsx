import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/Announcements.css";

function Announcements() {

const navigate = useNavigate();

const [announcements,setAnnouncements] = useState([]);
const [title,setTitle] = useState("");
const [message,setMessage] = useState("");

const user = JSON.parse(localStorage.getItem("user"));

useEffect(()=>{
fetchAnnouncements();
},[]);

const fetchAnnouncements = async()=>{

try{

const res = await API.get("/announcements");
setAnnouncements(res.data);

}catch(err){
console.error(err);
}

};

const handleCreate = async(e)=>{

e.preventDefault();

try{

await API.post("/announcements",{ title, message });

setTitle("");
setMessage("");

fetchAnnouncements();

}catch(err){
alert("Failed to create announcement");
}

};

/* DELETE ANNOUNCEMENT */

const deleteAnnouncement = async(id)=>{

if(!window.confirm("Delete this announcement?")) return;

try{

await API.delete(`/announcements/${id}`);
fetchAnnouncements();

}catch(err){

alert("Failed to delete");

}

};

/* Convert URLs into clickable links */

const formatMessage = (text) => {

const urlRegex = /(https?:\/\/[^\s]+)/g;

return text.replace(urlRegex,(url)=>{
return `<a href="${url}" target="_blank">${url}</a>`;
});

};

return(

<div className="announcement-page">

<button
className="back-btn"
onClick={()=>navigate("/admin")}
>
← Back
</button>

<h2>Announcements</h2>

{user?.role === "admin" && (

<form onSubmit={handleCreate} className="announcement-form">

<input
placeholder="Announcement Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
required
/>

<textarea
placeholder="Message"
value={message}
onChange={(e)=>setMessage(e.target.value)}
required
/>

<button type="submit">Post Announcement</button>

</form>

)}

{announcements.map(a=>(

<div key={a._id} className="announcement-card">

<h3>{a.title}</h3>

<p
dangerouslySetInnerHTML={{
__html: formatMessage(a.message)
}}
></p>


<small>
Posted by: {a.createdBy?.name || "Admin"} • {new Date(a.createdAt).toLocaleDateString()} • {new Date(a.createdAt).toLocaleTimeString()}
</small>


{user?.role === "admin" && (

<button
className="delete-announcement"
onClick={()=>deleteAnnouncement(a._id)}
>
Delete
</button>

)}

</div>

))}

</div>

)

}

export default Announcements;