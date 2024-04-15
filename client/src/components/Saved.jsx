import React, { useContext } from 'react'
import { AppContext } from '../context/App_Context'


const Saved = () => {
  const {savedRecipe} = useContext(AppContext);
  console.log(savedRecipe);

  return (
    <div>Saved</div>
  )
}

export default Saved