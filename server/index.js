
// user authentication imports
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";

// App specific imports
import cors from "cors";

import listsRoutes from "./routes/lists.js"
import listItemsRoutes from "./routes/listItems.js"

// user authentication logic
dotenv.config();

const app = express();

// allows the application to receive JSON files
app.use(express.json());

// user to parse the cookie from req.cookies
app.use(cookieParser());

// cors
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));  // Use cors middleware

mongoose.connect(process.env.MONGO_DB)
    .then(() => console.log("CONNECTED TO DATABASE"))
    .catch((err) => console.log(err))


app.listen(3000, () => {
    console.log("SERVER LISTENING ON PORT 3000");
});

// middleware to manage errors
app.use((err, req, res, next) => {
    // 500 is internal server error
    const statusCode = err.statusCode || 500;
    const errMessage = err.message || "Internal server error";

    return res.status(statusCode).json({
        success: false,
        message: errMessage,
        statusCode,
      });
});

app.use("/server/user", userRoutes);
app.use("/server/auth", authRoutes);

// APP specific logic
app.use("/server/lists", listsRoutes);
app.use("/server/listItems", listItemsRoutes);




