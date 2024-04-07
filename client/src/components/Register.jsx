import React from 'react'

const Register = () => {
  return (
    <div className="container p-5 my-5" style={{width:"500px", border: "2px solid yellow",borderRadius: "10px"}}>
    <h2 className="text-center">Register</h2>
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="name"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="container d-grid col-6">
      <button type="submit" className="btn btn-primary my-3">
        Register
      </button>
      </div>
    </form>
  </div>
  )
}

export default Register