import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProductDetails from "../../hooks/useProductDetails";
import { useForm } from "react-hook-form";
import "./SingleItemDetails.css";

const SingleItemDetails = () => {
  const [quantity, setQuantity] = useState([]);
  const [quantitySold, setQuantitySold] = useState([]);
  const { id } = useParams();
  const [product] = useProductDetails(id);

  useEffect(() => {
    setQuantity(product?.quantity);
    setQuantitySold(product?.quantitySold);
  }, [product]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      .then((result) => {
        setQuantity(parseInt(result.quantity));
        setQuantitySold(parseInt(result.quantitySold));
      });
  };

  const onSubmit = (data) => {
    const newData = { addQuantity: parseInt(data.quantity) };
    fetchData(newData);
  };

  const delivered = (_id) => {
    const newData = { decreaseByOne: 1 };
    fetchData(newData);
  };

  return (
    <>
      <div className="item-details-page">
        <h3 className="text-center">Item Details</h3>
        <div
          className="item-details-page card"
          style={{ width: "40%", maxWidth: "36rem" }}
        >
          <img src={product?.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <p>
              <strong>Id:</strong> {product?._id}{" "}
            </p>
            <p>
              <strong>Name:</strong> {product?.name}
            </p>
            <p>
              <strong>Description:</strong> {product?.description}
            </p>
            <p>
              <strong>Price: </strong>
              {product?.price}
            </p>
            <p>
              <strong>Quantity: </strong>
              {quantity}
            </p>
            <p>
              <strong>Supplier Name: </strong>
              {product?.supplier}
            </p>
            <p>
              <strong>Quantity Sold: </strong>
              {quantitySold}
            </p>
            <br></br>
            <div className="d-block text-center">
              <a
                href="#!"
                className="btn mx-auto btn-primary "
                onClick={() => delivered(id)}
              >
                Delivered
              </a>
            </div>
          </div>

          <div className="mx-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="">
                    Restock
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Quantity"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  {...register("quantity", { required: true })}
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
            {errors.quantity && (
              <span className="text-danger">* Quantity is required</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItemDetails;
