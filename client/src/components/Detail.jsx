import React from 'react'
import FetchRecipeById from './FetchRecipeById'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams()
  return (
    <div>
      <FetchRecipeById id={id}/>
    </div>
  )
}

export default Detail