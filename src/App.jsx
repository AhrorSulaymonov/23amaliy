import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./layout";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="fav" element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default App;
