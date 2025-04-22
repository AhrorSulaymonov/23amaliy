import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCart } from "../../contex/slices/cartSlice";
import ProductsList from "../../components/ProductsList/productsList";

function Cart() {
  const cartData = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(deleteAllCart())}>Remove All</button>
      <ProductsList products={cartData} />
    </>
  );
}

export default Cart;
