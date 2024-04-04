import Recipe from "../models/recipeModel.js";
import SavedRecipe from "../models/savedRecipeModel.js";
import { errorHandler } from "../utils/error.js";

export const add = async(req,res,next)=>{
    const {title,inst,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgurl} = req.body;

    try {
        const recipe = await Recipe.create({
            title,
            inst,
            ing1,
            ing2,
            ing3,
            ing4,
            qty1,
            qty2,
            qty3,
            qty4,
            imgurl,
            user: req.user,
        })
        res.status(200).json({message:"Recipe created successfully!",recipe});
    } catch (error) {
        next(error);
    }
}

export const getAllRecipe =  async (req,res,next) =>{
    const recipe = await Recipe.find()
    res.status(201).json({message:"get All Recipe",recipe})
}

export const getRecipeById = async(req,res,next)=>{
    const id=req.params.id;
    try {
        const recipe = await Recipe.findById(id)
        if(!recipe) return next(errorHandler(401,'recipe not exist'))
        res.status(200).json({message:'Get recipe by Id',recipe})
    } catch (error) {
        next(error);
    }
}

export const getRecipeByUserId = async(req,res,next)=>{
    const userId=req.params.id;
    try {
        const recipe = await Recipe.find({user:userId})
        if(!recipe) return next(errorHandler(402,'recipe not exist'))
        res.status(200).json({message:'Get recipe by UserId',recipe})
    } catch (error) {
        next(error);
    }
}

export const getSavedRecipe = async(req,res,next)=>{
    const id = req.params.id;
    let recipe = await SavedRecipe.findOne({recipe:id})
   if(recipe) return  res.status(200).json({message:"Recipe already Saved"})

   recipe = await SavedRecipe.create({recipe:id});
   res.status(200).json({message:"Recipe Saved Successfully!"})
}