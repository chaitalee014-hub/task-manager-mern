import express from "express";
import {
createTask,
getTasks,
submitTask,
reviewTask
} from "../controllers/taskController.js";

import {protect,adminOnly} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/",protect,adminOnly,createTask);

router.get("/",protect,getTasks);

router.put("/submit/:id",protect,submitTask);

router.put("/review/:id",protect,adminOnly,reviewTask);

export default router;