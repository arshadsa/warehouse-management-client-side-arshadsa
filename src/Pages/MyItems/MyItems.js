import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  const location = useLocation();

  useEffect(() => {
    const getMyItems = async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/user/${user.uid}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setProducts(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          Navigate("/login");
        }
      }
    };
    getMyItems();
  }, [user]);

  const deleteItem = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `${process.env.REACT_APP_BASE_URL}/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((service) => service._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div className="container">
      <br/><br/><br/>
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
              <th scope="row">{index+1}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.supplier}</td>
              <td>
              <Link to={`/edititem/${product._id}`}
                    className="btn btn-primary me-2"
                    state={{ from: location }} replace>
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
      <br/><br/>
    </div>
  );
};

export default MyItems;
