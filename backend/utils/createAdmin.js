import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

dotenv.config();

const createAdmin = async () => {

try{

await mongoose.connect(process.env.MONGO_URL);

const adminExists = await User.findOne({role:"admin"});

if(adminExists){
console.log("Admin already exists");
process.exit();
}

const hashedPassword = await bcrypt.hash("chaitu0104",10);

const admin = new User({
name:"Chaitalee",
email:"chaitalee014@gmail.com",
password:hashedPassword,
role:"admin"
});

await admin.save();

console.log("Admin created successfully");

process.exit();

}catch(error){

console.error(error);
process.exit(1);

}

}

createAdmin();