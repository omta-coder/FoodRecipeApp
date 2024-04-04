import express from  'express';
import { Authenticate} from '../utils/auth.js';
import { add, getAllRecipe, getAllSavedRecipe, getRecipeById, getRecipeByUserId, getSavedRecipe } from '../controllers/recipeController.js';

const router = express.Router();
//add route
router.post('/add',Authenticate,add)
//get route
router.get('/',getAllRecipe)
//get All Saved recipe routr
router.get('/saved',getAllSavedRecipe)
//get recipe by id
router.get('/:id',getRecipeById)
//get recipe by userId
router.get('/user/:id',getRecipeByUserId);
//get Saved Recipe by Id Route
router.post('/:id',Authenticate,getSavedRecipe);


export default router;