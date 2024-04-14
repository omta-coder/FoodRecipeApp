import React from 'react'
import { AppContext } from '../context/App_Context'
import { useContext } from 'react'


const FetchRecipeById = ({id}) => {
    const {getRecipeById} = useContext(AppContext)
  return (
    <div>FetchRecipeById</div>
  )
}

export default FetchRecipeById