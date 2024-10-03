import express from 'express';
import { authenticateUser, deleteUser, getUserById, getUserProfile, getUsers, logoutUser, registerUser, updateUser, updateUserProfile } from '../controllers/userController.js';

const usersRouter = express.Router();

usersRouter.route('/').post(registerUser).get(getUsers);
usersRouter.post('/login', authenticateUser);
usersRouter.post('/logout', logoutUser);
usersRouter.route('/profile').get(getUserProfile).put(updateUserProfile);
usersRouter.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

export default usersRouter;