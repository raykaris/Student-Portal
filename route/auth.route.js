import express from 'express';
import { registerEmployee, loginEmployee } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/register', registerEmployee);
authRouter.post('/login', loginEmployee);

export default authRouter;

