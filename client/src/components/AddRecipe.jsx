import React from "react";

const AddRecipe = () => {
  return (
    <div
      className="container p-5 my-5"
      style={{
        width: "500px",
        border: "2px solid yellow",
        borderRadius: "10px",
      }}
    >
      <h2 className="text-center">Add Recipe</h2>
      <form  style={{
            width: "400px",
            margin: "auto",
          }}
          className="my-3 p-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Title
          </label>
          <input
            name="title"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Instruction
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
           ing1
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
           ing2
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
           ing3
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
           ing4
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
           qty1
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
           qty2
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
           qty3
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
           qty4 
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
           imgurl 
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="container d-grid col-6">
          <button type="submit" class="btn btn-primary my-3">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
