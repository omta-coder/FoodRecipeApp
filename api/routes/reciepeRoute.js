import express from  'express';
import { verifyToken } from '../utils/auth.js';
import { add, getAllRecipe, getAllSavedRecipe, getRecipeById, getRecipeByUserId, getSavedRecipe } from '../controllers/recipeController.js';

const router = express.Router();
//add route
router.post('/add',add)
//get route
router.get('/',getAllRecipe)
//get All Saved recipe routr
router.get('/saved',getAllSavedRecipe)
//get recipe by id
router.get('/:id',getRecipeById)
//get recipe by userId
router.get('/user/:id',getRecipeByUserId);
//get Saved Recipe by Id Route
router.post('/:id',getSavedRecipe);


export default router;