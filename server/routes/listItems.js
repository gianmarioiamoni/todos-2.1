import express from "express";

import catchAsync from "../utils/catchAsync.js";

import * as listItems from "../controllers/listItems.js" 
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.route("/listItems/:id")
    .delete(verifyUser, catchAsync(listItems.deleteListItem))
    .put(verifyUser, catchAsync(listItems.updateListItem))
        
router.route("/listItems")
    .get(verifyUser, catchAsync(listItems.getListItems))
    .post(verifyUser, catchAsync(listItems.addListItem))
        

export default router;