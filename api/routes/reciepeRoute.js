import express from  'express';
import { verifyToken } from '../utils/auth.js';
import { add, getAllRecipe } from '../controllers/recipeController.js';

const router = express.Router();
//add route
router.post('/add',add)
//get route
router.get('/',getAllRecipe)

export default router;