import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product--info">
        {title}
        <div className="product--price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product--rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#9733;</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket} className="btn">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
