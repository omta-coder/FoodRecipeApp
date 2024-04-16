import React, { useContext } from 'react'
import { AppContext } from '../context/App_Context'
import FetchRecipeById from './FetchRecipeById';


const Saved = () => {
  const {savedRecipe} = useContext(AppContext);
  console.log(savedRecipe);

  return (
    <div className='row container my-3 mx-auto'>
      {savedRecipe?.map((data)=>(
        <div className="col-md-3" key={data.recipe}>
          <FetchRecipeById id={data.recipe}/>
        </div>
      ))}
    </div>
  )
}

export default Saved