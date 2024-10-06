import asyncHandler from "../middleware/asyncHandler.js"
import User from './../models/userModel.js';
import jwt from 'jsonwebtoken';

// @desc  Authenticate user & get token
// @route  POST api/users/login
// @access Public
export const authenticateUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser && (await existingUser.matchPassword(password))) {

        const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });

        // Setting token on a cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: 'strict',
            maxAge: 1 * 24 * 60 * 60 * 1000     // 1 day
        });

        res.json({
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
    return res.send("register user");
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
    return res.send("get user profile");
});

// @desc  update user profile
// @route  PUT api/users/profile
// @access Private
export const updateUserProfile = asyncHandler(async (req, res) => {
    return res.send("update user profile");
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