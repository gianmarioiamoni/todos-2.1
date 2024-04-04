import express from "express";
const router = express.Router();

import catchAsync from "../utils/catchAsync.js";

import * as lists from "../controllers/lists.js";

import { verifyUser } from "../utils/verifyUser.js";


router.route("/")
    .get(verifyUser, catchAsync(lists.getLists))
    .post(verifyUser, catchAsync(lists.addList))

router.route("/allTodosList")
    .get(verifyUser, catchAsync(lists.getAllTodosList))

router.route("/:id")
    .get(verifyUser, catchAsync(lists.getListById))
    .put(verifyUser, catchAsync(lists.updateListById))
    .delete(verifyUser, catchAsync(lists.deleteList))

router.route("/:id/listItems")
    .get(verifyUser, catchAsync(lists.getListItems))
    .put(verifyUser, catchAsync(lists.updateListItems))
    .delete(verifyUser, catchAsync(lists.deleteListItems))


export default router;

