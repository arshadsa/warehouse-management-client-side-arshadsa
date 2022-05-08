import React, { useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import ItemDetails from "../ItemDetails/ItemDetails";
import "./Items.css";
import Loading from "../../Shared/Loading/Loading";

const Items = ({ noi }) => {
  const [products, setProducts] = useProducts();

  if (products.length == 0) {
    return <Loading></Loading>;
  }

  console.log(noi);
  return (
    <>
      <br />
      <br />
      <br />
      <div className="items card-group">
        {parseInt(noi) > 1
          ? products
              .slice(0, noi)
              .map((product) => (
                <ItemDetails key={product._id} product={product}></ItemDetails>
              ))
          : products.map((product) => (
              <ItemDetails key={product._id} product={product}></ItemDetails>
            ))}
      </div>
      <br />
      <br />
    </>
  );
};

export default Items;
