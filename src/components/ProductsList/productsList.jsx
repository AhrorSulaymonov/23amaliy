import React from "react";
import Product from "../Products/Product";

const ProductsList = ({ products }) => {
  return (
    <div className="grid grid-cols-4  gap-4 p-4">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
