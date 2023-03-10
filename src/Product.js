import React from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

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
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <>⭐️</>
            ))}
        </div>
      </div>
      <img src={image} alt="Product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
