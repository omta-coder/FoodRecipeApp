import Recipe from "../models/recipeModel.js";

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