import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
import { useNavigate } from "react-router-dom";

const Home = () => {
 const navigate = useNavigate()
  const { recipe } = useContext(AppContext);
  return (
    <>
      <div className="mx-auto text-center " style={{width:"1200px"}}>
        <div className="row d-flex justify-content-center align-items-center">
          {recipe.map((data) => (
            <div key={data._id} className="col-md-3 my-3">
              <div className="card bg-dark text-light" style={{ width: "18rem" }}>
                <div className="d-flex justify-content-center align-items-center p-3">
                <img src={data.imgurl} className="card-img-top" alt="..." style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "10px",
                      border: "2px solid yellow",
                    }} />
                </div>
                
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <div className="my-3">
                    <button className="btn btn-primary mx-3">Save</button>
                    <button onClick={()=>navigate(`/${data._id}`)} className="btn btn-warning">View More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
