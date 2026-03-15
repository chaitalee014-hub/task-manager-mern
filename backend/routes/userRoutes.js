import express from "express";
import {
createIntern,
getUsers,
updateUser,
deleteUser
} from "../controllers/userController.js";

import {protect,adminOnly} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/",protect,adminOnly,createIntern);

router.get("/",protect,adminOnly,getUsers);

router.put("/:id",protect,adminOnly,updateUser);

router.delete("/:id",protect,adminOnly,deleteUser);

export default router;