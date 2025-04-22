import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/fav"}>Favates</Link>
      <Link to={"/cart"}>Cart</Link>
    </div>
  );
};

export default Header;
