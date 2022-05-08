import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useProductDetails from "../../hooks/useProductDetails";
import "./EditItem.css";

const EditItem = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [product] = useProductDetails(id);
  const [productForm, SetProductForm] = useState({name: '',
    description: '',
    price: '',
    img: '',
    quantity: '',
    supplier: ''});
  const [formData,setFormData] = useState([]);
  const location = useLocation();
  const navigate=useNavigate();
  let from = location.state?.from?.pathname;
  // console.log(from);

  useEffect(() => {
    SetProductForm({
      name: product.name,
      description: product.description,
      price: product.price,
      img: product.img,
      quantity: product.quantity,
      supplier: product.supplier,
    });
    // console.log(productForm);
  }, [product]);

  const url = `${process.env.REACT_APP_BASE_URL}/product/${id}`;
  const fetchData = async (newData) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      
  };

  const onSubmit = (data) => {
    // console.log({...productForm, edititem: true});
    const url = `${process.env.REACT_APP_BASE_URL}/product/${id}`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({...productForm, edititem: true}),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        navigate(from);
      });
  };

  return (
    <div className="container AddNewItem">
      <br />
      <br />
      <h2>Edit the item</h2>
      <br />
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Name
          </span>
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon3"
            value={productForm.name}
            onChange = {(e)=> {
              SetProductForm({...productForm, name: e.target.value})
              }
            }            
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
            value={productForm.description}
            onChange = {(e)=> {
              SetProductForm({...productForm, description: e.target.value})
              }
            } 
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
            value={productForm.price}
            onChange = {(e)=> {
              SetProductForm({...productForm, price: e.target.value})
              }
            } 
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
            value={productForm.img}
            onChange = {(e)=> {
              SetProductForm({...productForm, img: e.target.value})
              }
            }
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
            value={productForm.quantity}
            onChange = {(e)=> {
              SetProductForm({...productForm, quantity: e.target.value})
              }
            }
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Supplier Name
          </span>
          <input
            type="text"
            className="form-control"
            aria-describedby="basic-addon3"
            value={productForm.supplier}
            onChange = {(e)=> {
              SetProductForm({...productForm, supplier: e.target.value})
              }
            }
          />
        </div>
        <br />
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
      <br />
    </div>
  );
};

export default EditItem;
