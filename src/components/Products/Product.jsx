import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../contex/slices/wishlistSlice";
import { useLocation } from "react-router";
import { addToCart, remove } from "../../contex/slices/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);
  const CartData = useSelector((state) => state.cart.value);
  const location = useLocation();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product?.title}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">${product?.price}</p>
          <p className="text-sm text-gray-600 flex items-center">
            {product?.rating?.rate}
            <FaStar color="yellow" />
          </p>
        </div>
        <button onClick={() => dispatch(toggleHeart(product))}>
          {wishlistData.some((element) => element.id === product.id) ? (
            <FaHeart color="red" />
          ) : (
            <CiHeart color="red" />
          )}
        </button>

        {location.pathname === "/cart" ? (
          <button
            onClick={() => dispatch(remove(product))}
            className="product__card__info__cart__btn"
          >
            Delete
          </button>
        ) : (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="product__card__info__cart__btn"
          >
            {CartData.some((element) => element.id === product.id) ? (
              <p>Added card</p>
            ) : (
              <p>Add to Cart</p>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
