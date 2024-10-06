import express from 'express';
import { authenticateUser, deleteUser, getUserById, getUserProfile, getUsers, logoutUser, registerUser, updateUser, updateUserProfile } from '../controllers/userController.js';
import { adminify, protect } from './../middleware/authMiddleware.js';

const usersRouter = express.Router();

usersRouter.route('/').post(registerUser).get(protect, adminify, getUsers);
usersRouter.post('/auth', authenticateUser);
usersRouter.post('/logout', logoutUser);
usersRouter.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
usersRouter.route('/:id').get(protect, adminify, getUserById).delete(protect, adminify, deleteUser).put(protect, adminify, updateUser);

export default usersRouter;