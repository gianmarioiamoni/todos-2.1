import express from "express";
const router = express.Router();

import catchAsync from "../utils/catchAsync.js";

import * as lists from "../controllers/lists.js";

import { verifyUser } from "../utils/verifyUser.js";

// router.route("/lists")
//     .get(verifyUser, catchAsync(lists.getLists))
//     .post(verifyUser, catchAsync(lists.addList))

// router.route("/lists/allTodosList")
//     .get(verifyUser, catchAsync(lists.getAllTodosList))
        

// router.route("/lists/:id")
//     .get(verifyUser, catchAsync(lists.getListById))
//     .put(verifyUser, catchAsync(lists.updateListById))
//     .delete(verifyUser, catchAsync(lists.deleteList))

// router.route("/lists/:id/listItems")
//     .get(verifyUser, catchAsync(lists.getListItems))
//     .put(verifyUser, catchAsync(lists.updateListItems))
//     .delete(verifyUser, catchAsync(lists.deleteListItems))

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


// router.route("/lists")
//     .get(catchAsync(lists.getLists))
//     .post(catchAsync(lists.addList))

// router.route("/lists/allTodosList")
//     .get(catchAsync(lists.getAllTodosList))


// router.route("/lists/:id")
//     .get(catchAsync(lists.getListById))
//     .put(catchAsync(lists.updateListById))
//     .delete(catchAsync(lists.deleteList))

// router.route("/lists/:id/listItems")
//     .get(catchAsync(lists.getListItems))
//     .put(catchAsync(lists.updateListItems))
//     .delete(catchAsync(lists.deleteListItems))
        

export default router;

