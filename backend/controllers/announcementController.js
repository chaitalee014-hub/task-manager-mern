import Announcement from "../models/Announcement.js";

export const createAnnouncement = async(req,res)=>{

const announcement = await Announcement.create({

title:req.body.title,
message:req.body.message,
createdBy:req.user._id

});

res.json(announcement);

};

export const getAnnouncements = async(req,res)=>{

const announcements = await Announcement.find()
.populate("createdBy","name");

res.json(announcements);

};