import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

function InternDashboard(){

return(

<div className="dashboard">

<h1>Intern Dashboard</h1>

{/* Instruction Section */}

<div className="dashboard-info">

<h2>Welcome Intern 👋</h2>

<p>
This dashboard helps you manage your internship tasks and stay updated with important announcements from the admin. 
Follow the instructions below to complete your internship work smoothly.
</p>

<ul>
<li>📌 Check <strong>My Tasks</strong> regularly to view the tasks assigned to you.</li>
<li>💻 Submit your work with GitHub repository and project demo link.</li>
<li>⏰ Make sure to complete tasks before the given deadline.</li>
<li>📢 Visit the <strong>Announcements</strong> section for important updates.</li>
<li>✅ Once your task is reviewed, you will receive feedback from the admin.</li>
</ul>

</div>

{/* Navigation Cards */}

<div className="card-container">

<Link to="/tasks" className="card">
<h3>📋 My Tasks</h3>
<p>View assigned tasks and submit your work.</p>
</Link>

<Link to="/announcements" className="card">
<h3>📢 Announcements</h3>
<p>View latest updates and instructions from admin.</p>
</Link>

</div>

</div>

)

}

export default InternDashboard;