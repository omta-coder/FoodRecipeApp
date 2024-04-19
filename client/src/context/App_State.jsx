import React, { useEffect, useState } from "react";
import { AppContext } from "./App_Context";
import axios from "axios";

const App_State = (props) => {
  const url = "http://localhost:3000/api";
  const [token, setToken] = useState();
  const [recipe, setrecipe] = useState([]);
  const [savedRecipe, setsavedRecipe] = useState([])
  const [user, setuser] = useState()

  useEffect(() => {
    const fetchRecipe = async()=>{
      const res = await axios.get(
        `${url}/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res.data.recipe);
      setrecipe(res.data.recipe)
    }
    fetchRecipe();
    getSavedRecipeById();
    profile();
  }, []);

  useEffect(() => {
   if(token){
    localStorage.setItem("token", token);
   }
   const tokenFromLocalStorage = localStorage.getItem("token",token)
   if(tokenFromLocalStorage){
    setToken(tokenFromLocalStorage)
   }
  }, [token])
  

  //register
  const register = async (name, email, password) => {
    const res = await axios.post(
      `${url}/register`,
      { name, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return res;
  };

  //Login
  const login = async (email, password) => {
    const res = await axios.post(
      `${url}/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(res);
    setToken(res.data.token);
    return res;
  };
  //add recipe
  const addRecipe = async (
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
    imgurl
  ) => {
    const res = await axios.post(
      `${url}/add`,
      { title, inst, ing1, ing2, ing3, ing4, qty1, qty2, qty3, qty4, imgurl },
      {
        headers: {
          "Content-Type": "application/json",
          Auth:token
        },
        withCredentials: true,
      }
    );
    return res;
  };
  
  //get recipe by id
  const getRecipeById = async(id)=>{
    const res = await axios.get(`${url}/${id}`,{
      headers:{
        "Content-Type":"application/json"
      },
      withCredentials:true
    })
    console.log(res);
    return res;
  }

  //saved recipe by Id
  const savedRecipeById = async(id)=>{
    const res = await axios.post(`${url}/${id}`,{},{
      headers:{
        "Content-Type":"application/json",
        Auth:token
      },
      withCredentials:true
    })
    console.log(res);
    return res;
  }

  //get saved recipe
  const getSavedRecipeById = async()=>{
    const res = await axios.get(`${url}/saved`,{
      headers:{
        "Content-Type":"application/json"
      },
      withCredentials:true
    })
    console.log("getting saved recipe ",res.data.recipe);
    setsavedRecipe(res.data.recipe)
  }

  //profile
  const profile = async()=>{
    const res = await axios.get(`${url}/user`,{
      headers:{
        "Content-Type":"application/json",
        Auth:token
      },
      withCredentials:true
    })
    console.log("This is user profile",res);
    setuser(res.data.user)
  }

  return (
    <AppContext.Provider
      value={{
        login,
        register,
        addRecipe,
        recipe,
        getRecipeById,
        savedRecipeById,
        savedRecipe,
        user,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default App_State;
