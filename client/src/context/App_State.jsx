import React, { useEffect, useState } from "react";
import { AppContext } from "./App_Context";
import axios from "axios";

const App_State = (props) => {
  const url = "http://localhost:3000/api";
  const [token, setToken] = useState();

  useEffect(() => {}, []);

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

  return (
    <AppContext.Provider
      value={{
        login,
        register,
        addRecipe,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default App_State;
