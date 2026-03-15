import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({

title:{
type:String,
required:true
},

description:{
type:String
},

intern:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
required:true
},

priority:{
type:String,
enum:["low","medium","high"],
default:"medium"
},

githubLink:{
type:String
},

submissionLink:{
type:String
},

feedback:{
type:String
},

status:{
type:String,
enum:["pending","in-progress","submitted","completed","rejected"],
default:"pending"
},

deadline:{
type:Date
},

submittedAt:{
type:Date
},

reviewedAt:{
type:Date
},

taskType: {
  type: String,
  enum: ["individual", "common"],
  default: "individual"
}

},{timestamps:true});

export default mongoose.model("Task",taskSchema);