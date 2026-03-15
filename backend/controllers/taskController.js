import Task from "../models/Task.js";

export const createTask = async (req,res)=>{

try{

const {title,description,intern,deadline} = req.body;

const task = await Task.create({
title,
description,
intern,
deadline
});

res.json(task);

}catch(error){

res.status(500).json({message:error.message});

}

};


export const getTasks = async(req,res)=>{

try{

if(req.user.role === "admin"){

const tasks = await Task.find()
.populate("intern","name internId email");

return res.json(tasks);

}

const tasks = await Task.find({
intern:req.user._id
});

res.json(tasks);

}catch(error){

res.status(500).json({message:error.message});

}

};


export const submitTask = async(req,res)=>{

try{

const task = await Task.findById(req.params.id);

if(!task){
return res.status(404).json({message:"Task not found"});
}

task.githubLink = req.body.githubLink;
task.submissionLink = req.body.submissionLink;
task.submittedAt = new Date();
task.status = "submitted";

await task.save();

res.json(task);

}catch(error){

res.status(500).json({message:error.message});

}

};


export const reviewTask = async(req,res)=>{

try{

const task = await Task.findById(req.params.id);

if(!task){
return res.status(404).json({message:"Task not found"});
}

task.status = req.body.status;
task.feedback = req.body.feedback;

await task.save();

res.json(task);

}catch(error){

res.status(500).json({message:error.message});

}

};