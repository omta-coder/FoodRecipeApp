import React from "react";

const Login = () => {
  return (
    <div className="container p-5 my-5" style={{width:"500px", border: "2px solid yellow",borderRadius: "10px"}}>
      <h2 className="text-center">Login</h2>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="container d-grid col-6">
        <button type="submit" class="btn btn-primary my-3">
          Login
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
