import React, { useEffect, useState } from 'react'
import { AppContext } from './App_Context'
import axios  from "axios"


const App_State = (props) => {
  const url = "http://localhost:3000/api"
  const [token, setToken] = useState()

  useEffect(() => {
 
  }, [])
  

  //Login
  const login = async(email,password)=>{
    const  res= await axios.post(`${url}/login`,
    { 
      email , password 
    },
    {
      headers:{
        "Content-Type":"application/json"
      },
      withCredentials:true
    });
    console.log(res);
    setToken(res.data.token)
    return  res;
  }
  return (
    <AppContext.Provider value={{
      login
    }}>{props.children}</AppContext.Provider>
  )
}

export default App_State