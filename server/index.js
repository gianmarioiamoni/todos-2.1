import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";


dotenv.config();

const app = express();

// allows the application to receive JSON files
app.use(express.json());

// user to parse the cookie from req.coockies
app.use(cookieParser());

mongoose.connect(process.env.MONGO_DB)
    .then(() => console.log("CONNECTED TO DATABASE"))
    .catch((err) => console.log(err))


app.listen(3000, () => {
    console.log("SERVER LISTENING ON PORT 3000");
});

app.use("/server/user", userRoutes);
app.use("/server/auth", authRoutes);

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




