import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
name:{
type:String,
required:true
},

email:{
type:String,
required:true,
unique:true
},

password:{
type:String,
required:true
},

role:{
type:String,
enum:["admin","intern"],
default:"intern"
},

internId:{
type:String,
unique:true,
sparse:true
},

phone:{
type:String
},

isVerified:{
type:Boolean,
default:true
},

resetToken:{
type:String
},

resetTokenExpire:{
type:Date
}

},
{timestamps:true}
);

export default mongoose.model("User",userSchema);