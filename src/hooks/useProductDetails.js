import React, { useEffect, useState } from 'react';

const useProductDetails = (productId) => {
  const [product, setProduct] = useState([]);
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_BASE_URL}/product/${productId}`)
    .then(res => res.json())
    .then(data => setProduct(data))
  }, [productId])
  return [product, setProduct];
};

export default useProductDetails;