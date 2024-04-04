import express from 'express'
import { login, profile, register } from '../controllers/userController.js';
import { Authenticate } from '../utils/auth.js';


const router = express.Router();

router.post('/register',register);
router.post('/login',login)
router.get('/user',Authenticate,profile);

export default router;