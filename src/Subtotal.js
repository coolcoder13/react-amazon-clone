import React, { useMemo } from "react";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const getBasketTotal = useMemo(() => {
    return basket?.reduce((acc, item) => item.price + acc, 0);
  }, [basket]);
  console.log(basket, getBasketTotal);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items) :
        <strong>${`${getBasketTotal?.toFixed(2) || ""}`}</strong>
      </p>
      <small>
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed Checkout</button>
    </div>
  );
}

export default Subtotal;
