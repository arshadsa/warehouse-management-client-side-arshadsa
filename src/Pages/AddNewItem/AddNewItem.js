import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import "./AddNewItem.css";

const AddNewItem = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.uid = user.uid;
    const url = `${process.env.REACT_APP_BASE_URL}/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="container AddNewItem">
      <h2>Please add a new item</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Name
          </span>
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon3"
            {...register("name", { required: true, maxLength: 20 })}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Description
          </span>
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon3"
            {...register("description")}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Price
          </span>
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon3"
            {...register("price")}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Photo URL
          </span>
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon3"
            {...register("img")}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Quantity
          </span>
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon3"
            {...register("quantity")}
          />
        </div>
        <div className="d-flex ms-auto">
          <button
            href="#!"
            className="btn btn-primary"
            type="submit"
            value="Add Product"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewItem;
