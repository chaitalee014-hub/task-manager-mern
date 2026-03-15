import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const createIntern = async (req,res)=>{

try{

const {name,email,password,phone} = req.body;

const existingUser = await User.findOne({email});

if(existingUser){
return res.status(400).json({message:"User already exists"});
}

const count = await User.countDocuments({role:"intern"});
const internId = "INT" + String(count + 1).padStart(3,"0");

const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password,salt);

const user = await User.create({
name,
email,
password:hashedPassword,
phone,
internId,
role:"intern"
});

res.json({
message:"Intern created successfully",
intern:{
_id:user._id,
name:user.name,
email:user.email,
internId:user.internId
}
});

}catch(error){
res.status(500).json({message:error.message});
}

};




// GET ALL INTERNS
export const getUsers = async(req,res)=>{

try{

const users = await User.find({role:"intern"}).select("-password");

res.json(users);

}catch(error){
res.status(500).json({message:error.message});
}

};


// UPDATE INTERN
export const updateUser = async(req,res)=>{

try{

const user = await User.findById(req.params.id);

if(!user){
return res.status(404).json({message:"User not found"});
}

user.name = req.body.name || user.name;
user.phone = req.body.phone || user.phone;
user.email = req.body.email || user.email;

await user.save();

res.json(user);

}catch(error){
res.status(500).json({message:error.message});
}

};


// DELETE INTERN
export const deleteUser = async(req,res)=>{

try{

await User.findByIdAndDelete(req.params.id);

res.json({message:"User removed"});

}catch(error){
res.status(500).json({message:error.message});
}

};