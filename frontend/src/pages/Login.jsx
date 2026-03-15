import {useState,useContext} from "react";
import API from "../services/api";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import "../styles/Login.css";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [showPassword,setShowPassword] = useState(false);

const {login} = useContext(AuthContext);
const navigate = useNavigate();

const handleSubmit = async(e)=>{

e.preventDefault();

try{

const res = await API.post("/auth/login",{email,password});

login(res.data);

if(res.data.user.role==="admin"){
navigate("/admin");
}else{
navigate("/dashboard");
}

}catch(err){
alert(err.response?.data?.message || "Login failed");
}

};

return(

<div className="auth-container">

<form onSubmit={handleSubmit} className="auth-card">

<h2>Login</h2>

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
required
/>

<div style={{position:"relative"}}>

<input
type={showPassword ? "text" : "password"}
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
required
/>

<span
style={{
position:"absolute",
right:"10px",
top:"8px",
cursor:"pointer"
}}
onClick={()=>setShowPassword(!showPassword)}
>
👁
</span>

</div>

<button>Login</button>

</form>

</div>

)

}

export default Login;