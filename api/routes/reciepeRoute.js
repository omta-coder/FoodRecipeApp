import express from  'express';
import { verifyToken } from '../utils/auth.js';
import { add } from '../controllers/recipeController.js';

const router = express.Router();

router.post('/add',verifyToken,add)


export default router;