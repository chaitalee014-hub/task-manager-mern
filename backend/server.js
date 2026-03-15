import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes.js"
import connectDB from "./config/db.js";
import announcementRoutes from "./routes/announcementRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";



connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/tasks",taskRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/announcements",announcementRoutes);


app.get("/",(req,res)=>{
res.send("Intern Task Manager API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`);
});