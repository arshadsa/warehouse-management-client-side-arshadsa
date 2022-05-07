import React from "react";
import "./ItemDetails.css";
import { Link, useNavigate } from "react-router-dom";

const ItemDetails = (product) => {
  const {
    _id,
    img,
    name,
    description,
    price,
    quantity,
    supplier,
    quantitySold,
  } = product.product;
  
  return (
    <>
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <p className="card-text">{description}</p>
          <p>Supplier Name: {supplier}</p>
          <Link className="btn btn-primary" to={`/inventory/${_id}`}>
            Update
          </Link>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
