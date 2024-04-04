import mongoose from "mongoose";


const savedRecipeSchema = new mongoose.Schema({
    recipe:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:"recipe"
    }
})

const SavedRecipe = mongoose.model("SavedRecipe", savedRecipeSchema);

export default  SavedRecipe;