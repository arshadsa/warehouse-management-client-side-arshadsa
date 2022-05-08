import React from "react";
import { Link, useLocation } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Items from "../Shared/Items/Items";
import PageTitle from "../Shared/PageTitle/PageTitle";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [products, setProducts] = useProducts();
  const location = useLocation();
  
  const deleteItem = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `${process.env.REACT_APP_BASE_URL}/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          const remaining = products.filter((service) => service._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <>
      <PageTitle title="Manage Inventory"></PageTitle>
      <br />
      <br />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Supplier Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.supplier}</td>
                <td>
                  <Link to={`/edititem/${product._id}`}
                    className="btn btn-primary me-2"
                    state={{ from: location }} replace
                  >
                    Edit
                  </Link>
                  <a
                    href="#!"
                    className="btn btn-danger"
                    onClick={() => deleteItem(product._id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-info" to='/add-new-item'>Add New Item</Link>
      </div>

      {/* <div className="container">
        <h4>Manage Items:</h4>
        <br></br>
        {products.map((product) => (
          <div key={product._id} className="row">
            <h5 className="col">{product.name} </h5>
            <button className="col" onClick={() => deleteItem(product._id)}>
              X
            </button>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default ManageInventory;
