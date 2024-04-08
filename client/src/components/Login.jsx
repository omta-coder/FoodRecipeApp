import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const {login} = useContext(AppContext);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const loginHandler = async(e)=>{
    e.preventDefault();
    const result = await login(email, password);
    toast.success(result.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    console.log(result.data);
  }

  return (
    <>
     <ToastContainer />
    <div className="container p-5 my-5" style={{width:"500px", border: "2px solid yellow",borderRadius: "10px"}}>
      <h2 className="text-center">Login</h2>
      <form onSubmit={loginHandler}
       style={{
        width: "420px",
        margin: "auto",
      }}
      className="my-3 p-3"
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
          value={email}
          onChange={(e)=>setemail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="container d-grid col-6">
        <button type="submit" className="btn btn-primary my-3">
          Login
        </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;
