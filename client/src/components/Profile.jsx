import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";

const Profile = () => {
  const { user } = useContext(AppContext);
  return (
    <>
      <div className="container text-center">
        <h1>Welcome, {user.name}</h1>
        <h2>{user.email}</h2>
      </div>
    </>
  );
};

export default Profile;
