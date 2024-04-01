import bcryptjs from 'bcryptjs';

import { errorHandler } from "../utils/error.js"
import User from '../models/user.js';

export const getMessage = (req, res) => {
    res.json({
        message: "Hello World!"
    });
};

// next() allows to use the middleware to handle errors
export const updateUser = async (req, res, next) => {
    // check if the user is trying to updated his own account
    // req.user comes from validateUser middleware
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, "You can update your account only"));
    }

    // the user is the owner of the profile
    try {
        // if there is a new password, we want encrypt it
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        // update the user
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
            {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                profilePicture: req.body.profilePicture
            },
            { new: true } // we get back the updated user
        );

        // remove the password from the response to be send to the client
        const { password, ...rest } = updatedUser._doc;

        // send back the updated user to the client, without the password
        res.status(200).json({ ...rest, success: true });
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    // check if the user is trying to delete his own account
    // req.user comes from validateUser middleware
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, "You can delete your account only"));
    }

    // the user is authorized to delete his own account
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been successfully deleted")

    } catch (error) {
        next(error);
    }
}