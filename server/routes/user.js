import express from 'express';

import { updateUser, deleteUser } from "../controllers/user.js";

import { verifyUser } from "../utils/verifyUser.js";


const router = express.Router();

router.post("/update/:id", verifyUser, updateUser);
router.delete("/delete/:id", verifyUser, deleteUser);

export default router;