import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header--logo"
        />
      </Link>

      <div className="header--search">
        <input type="text" className="header--searchInput" />
        <i class="fa-solid fa-magnifying-glass fa-2x"></i>
      </div>
      <div className="header--nav">
        <div className="header--option">
          <span className="header--optionLineOne">Hello Guest</span>
          <span className="header--optionLineTwo">Sign In</span>
        </div>
        <div className="header--option">
          <span className="header--optionLineOne">Returns</span>
          <span className="header--optionLineTwo"> & orders</span>
        </div>
        <div className="header--option">
          <span className="header--optionLineOne">Your</span>
          <span className="header--optionLineTwo">Prime</span>
        </div>
      </div>
      <div className="header--optionBasket">
        <Link to="checkout">
          <i class="fa-solid fa-cart-shopping fa-2x"></i>
        </Link>

        <span className="header--optionLineTwo header--basketCount">
          {basket?.length}
        </span>
      </div>
    </div>
  );
}

export default Header;
