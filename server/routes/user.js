import express from 'express';

import { getMessage } from "../controllers/user.js";
import { updateUser, deleteUser } from "../controllers/user.js";

import { verifyUser } from "../utils/verifyUser.js";


const router = express.Router();

// test API route
router.get("/", getMessage);

router.post("/update/:id", verifyUser, updateUser);
router.delete("/delete/:id", verifyUser, deleteUser);

export default router;