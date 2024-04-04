import jwt from 'jsonwebtoken';

import { errorHandler } from "./error.js";

export const verifyUser = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        // the user is not validated
        return next(errorHandler(401, "You are not authenticated. Please sign in"));
    }

    // we have a token. Check if it is valid
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return next(errorHandler(403, "Token is not valid"));
        }

        // the token is valid. Add the user to the req
        req.user = user;

        next();
    })
}