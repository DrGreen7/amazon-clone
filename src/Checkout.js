import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout--left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="checkout--ad"
        />
        <h2 className="checkout--title">Your Shopping Basket</h2>
      </div>
      <div className="checkout--right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
