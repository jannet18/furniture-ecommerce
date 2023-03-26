import React from 'react';
import ProductCard from './ProductCard';

const ProductsList = ({data}) => {
  return (
    <>
    {
      data?.map((item, id) => (
        <ProductCard item={item} key={id} />
      ))
    }
       
    </>
  )
}

export default ProductsList