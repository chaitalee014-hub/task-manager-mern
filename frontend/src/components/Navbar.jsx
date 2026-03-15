import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/navbar.css";

function Navbar() {

const navigate = useNavigate();
const { user, logout } = useContext(AuthContext);

const handleLogout = ()=>{
logout();
navigate("/login");
};

return (

<div className="navbar">

<h2>Intern Task Manager</h2>

<div className="nav-links">

<Link to="/">Home</Link>

{user?.role === "admin" && (
<Link to="/admin">Admin Dashboard</Link>
)}

{user?.role === "intern" && (
<Link to="/dashboard">Intern Dashboard</Link>
)}

{user && <Link to="/tasks">Tasks</Link>}

{!user ? (
<Link className="button" to="/login">Login</Link>
) : (
<button onClick={handleLogout}>Logout</button>
)}

</div>

</div>

);

}

export default Navbar;