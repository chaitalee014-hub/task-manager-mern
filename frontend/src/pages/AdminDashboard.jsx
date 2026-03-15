import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import API from "../services/api";
import "../styles/Dashboard.css";

function AdminDashboard(){

const [stats,setStats] = useState({
totalInterns:0,
totalTasks:0,
submittedTasks:0,
pendingTasks:0
});

useEffect(()=>{

const fetchStats = async()=>{

try{

const res = await API.get("/admin/stats");
setStats(res.data);

}catch(err){

console.log(err);

}

};

fetchStats();

},[]);

return(

<div className="dashboard">

<div className="dashboard-header">

<h1>Admin Dashboard</h1>

<p className="dashboard-subtitle">
Welcome to the Internship Management System. Monitor interns, assign tasks and track progress efficiently.
</p>

</div>

{/* Statistics */}

<div className="stats-container">

<div className="stat-card">
<h2>{stats.totalInterns}</h2>
<p>Total Interns</p>
</div>

<div className="stat-card">
<h2>{stats.totalTasks}</h2>
<p>Total Tasks</p>
</div>

<div className="stat-card">
<h2>{stats.submittedTasks}</h2>
<p>Submitted Tasks</p>
</div>

<div className="stat-card">
<h2>{stats.pendingTasks}</h2>
<p>Pending Tasks</p>
</div>

</div>

{/* Main Navigation */}

<div className="card-container">

<Link to="/interns" className="card">
<h3>👨‍💻 Intern List</h3>
<p>View all interns and manage their profiles.</p>
</Link>

<Link to="/create-intern" className="card">
<h3>➕ Create Intern</h3>
<p>Add new interns and generate login credentials.</p>
</Link>

<Link to="/tasks" className="card">
<h3>📋 Manage Tasks</h3>
<p>Assign tasks and review intern submissions.</p>
</Link>

<Link to="/announcements" className="card">
<h3>📢 Announcements</h3>
<p>Post updates and guidelines for interns.</p>
</Link>

</div>

</div>

)

}

export default AdminDashboard;