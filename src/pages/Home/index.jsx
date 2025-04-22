import React from 'react'
import ProductsList from '../../components/ProductsList/productsList';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const [data, loading, error] = useFetch("https://fakestoreapi.com/products");
  return (
    <div>
      {/* <h2>Home</h2> */}
      {error && <h2>Error</h2>}
      {loading && <h2>loading...</h2>}
      {data && <ProductsList products={ data}/>}
    </div>
  );
}

export default Home