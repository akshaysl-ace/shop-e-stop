import asyncHandler from "../middleware/asyncHandler.js"
import { generateToken } from "../utils/authTokenUtils.js";
import User from './../models/userModel.js';

// @desc  Authenticate user & get token
// @route  POST api/users/login
// @access Public
export const authenticateUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email: email });

    if (existingUser && (await existingUser.matchPassword(password))) {
        generateToken(res, existingUser._id);
        res.status(200).json({
            _id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
            isAdmin: existingUser.isAdmin
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});


// @desc  Register user & get token
// @route  POST api/users
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists !");
    }
    const user = await User.create({ name, email, password });
    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(400);
        throw new Error("Invalid user data !");
    }

});

// @desc  Log user out & clear token
// @route  POST api/users/logout
// @access Private
export const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', { httpOnly: true, expires: new Date(0) });
    return res.status(200).json({ message: "Logged out successfully !" });
});

// @desc  Get user profile
// @route  GET api/users/profile
// @access Private
export const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(404);
        throw new Error("User not found !");
    }
});

// @desc  update user profile
// @route  PUT api/users/profile
// @access Private
export const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password;
        }
        const updatedUser = await user.save();
        res.status(200).json({
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin
        })
    }
    else {
        res.status(404);
        throw new Error("User no found !");
    }

});

// @desc  Get users
// @route  GET api/users
// @access Private/admin
export const getUsers = asyncHandler(async (req, res) => {
    return res.send("get users");
});

// @desc  Get user by Id
// @route  GET api/users/:id
// @access Private/admin
export const getUserById = asyncHandler(async (req, res) => {
    return res.send("get user by id");
});

// @desc  delete user
// @route  DELETE api/users/:id
// @access Private/admin
export const deleteUser = asyncHandler(async (req, res) => {
    return res.send("delete user");
});

// @desc  update user
// @route  PUT api/users/:id
// @access Private/admin
export const updateUser = asyncHandler(async (req, res) => {
    return res.send("update user");
});