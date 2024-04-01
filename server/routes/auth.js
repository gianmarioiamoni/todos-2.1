import express from "express";

import { signup, signin, google, signout } from "../controllers/auth.js";

const router = express.Router();

// signup route
router.post("/signup", signup);

// signin route
router.post("/signin", signin);

// signin with google
router.post("/google", google);

// sign-out
router.get("/signout", signout);


export default router;



