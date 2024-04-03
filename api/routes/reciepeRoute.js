import express from  'express';
import { verifyToken } from '../utils/auth.js';
import { add, getAllRecipe, getRecipeById, getRecipeByUserId } from '../controllers/recipeController.js';

const router = express.Router();
//add route
router.post('/add',add)
//get route
router.get('/',getAllRecipe)
//get recipe by id
router.get('/:id',getRecipeById)
//get recipe by userId
router.get('/user/:id',getRecipeByUserId);

export default router;