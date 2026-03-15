import User from "../models/User.js";
import Task from "../models/Task.js";

export const getDashboardStats = async (req,res)=>{

try{

const totalInterns = await User.countDocuments({role:"intern"});

const totalTasks = await Task.countDocuments();

const submittedTasks = await Task.countDocuments({status:"submitted"});

const pendingTasks = await Task.countDocuments({status:"pending"});

res.json({
totalInterns,
totalTasks,
submittedTasks,
pendingTasks
});

}catch(error){

res.status(500).json({message:error.message});

}

};