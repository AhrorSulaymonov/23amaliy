import React from 'react'
import { useSelector } from 'react-redux'
import ProductsList from '../../components/ProductsList/productsList';

const Favorites = () => {
  const wishlestData = useSelector((state)=>state.wishlist.value)
  return <ProductsList products={wishlestData} />;
}

export default Favorites