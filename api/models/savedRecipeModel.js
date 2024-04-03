import mongoose, { mongo } from "mongoose";

const savedRecipeSchema = new mongoose.Schema({
    recipe:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:"recipe"
    }
})

const Recipe = mongoose.model("Recipe", savedRecipeSchema);

export default  Recipe;