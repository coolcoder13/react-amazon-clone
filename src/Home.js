import React from "react";
import Product from "./Product.js";
import "./Home.css";

const products = [
  {
    id: "1231",
    title: "Phone",
    price: 598.99,
    rating: 4,
    image: "images/phone.png",
  },
  {
    id: "1232",
    title: "Speaker",
    price: 98.99,
    rating: 5,
    image: "images/speaker.png",
  },
  {
    id: "1233",
    title: "Book",
    price: 14.91,
    rating: 5,
    image: "images/book.png",
  },
  {
    id: "1234",
    title: "Refrigerator",
    price: 999.99,
    rating: 4,
    image: "images/fridge.png",
  },

  {
    id: "1235",
    title: "Smartwatch",
    price: 26.99,
    rating: 4,
    image: "images/watch.png",
  },
  {
    id: "1236",
    title: "Television",
    price: 294.98,
    rating: 4,
    image: "images/tv.png",
  },
];

function Home() {
  return (
    <div className="home">
      <img className="home__image" src="images/bg.png" />
      <div className="home__row">
        {products.slice(0, 2).map((item, ix) => (
          <Product
            key={ix}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
        ))}
      </div>
      <div className="home__row">
        {products.slice(2, 5).map((item, ix) => (
          <Product
            key={ix}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
        ))}
      </div>
      <div className="home__row">
        {products.slice(5, 6).map((item, ix) => (
          <Product
            key={ix}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
