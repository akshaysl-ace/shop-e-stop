import asyncHandler from "../middleware/asyncHandler.js"
import User from './../models/userModel.js';

// @desc  Authenticate user & get token
// @route  POST api/users/login
// @access Public
export const authenticateUser = asyncHandler(async (req, res) => {
    return res.send("auth user");
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
    return res.send("logout user");
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