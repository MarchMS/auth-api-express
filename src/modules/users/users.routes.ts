import express from 'express';
import { authMiddleware } from '../../common/middlewares/auth.middleware';
import { getUsers, loginUser, registerUser } from './users.controller';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', authMiddleware, getUsers);

export default router;