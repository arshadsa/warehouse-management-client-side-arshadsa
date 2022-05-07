import React, { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_BASE_URL}/products`)
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
  return [products, setProducts];
};

export default useProducts;