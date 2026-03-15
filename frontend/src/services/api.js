import axios from "axios";

const API = axios.create({
baseURL: "https://task-manager-mern-0yb5.onrender.com",
headers:{
"Content-Type":"application/json"
}
});

API.interceptors.request.use((req)=>{

const token = localStorage.getItem("token");

if(token){
req.headers.Authorization = `Bearer ${token}`;
}

return req;

});

export default API;