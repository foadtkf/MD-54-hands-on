import React from "react";
import Cart from "../Cart/Cart";
import "./Home.css";
import useTshirts from "./../../hoooks/useTshirts";
import Tshirts from "../Tshirts/Tshirts";
import { useState } from "react";
const Home = () => {
  const [tshirts, setTshirts] = useTshirts();
  const [cart, setCart] = useState([]);
  const handleAddtoCart = (selectedItem) => {
    const exists = cart.find((tshirt) => tshirt.id === selectedItem.id);
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("item already added!");
    }
  };

  const handleRemovefromCart = (selectedItem) => {
    const newCart = cart.filter((tshirt) => tshirt.id !== selectedItem.id);
    setCart(newCart);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        <h2>There are {tshirts.length} T-shirts</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
          {tshirts.map((tshirt) => (
            <Tshirts
              key={tshirt.id}
              tshirt={tshirt}
              handleAddtoCart={handleAddtoCart}
            ></Tshirts>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart
          cart={cart}
          handleRemovefromCart={handleRemovefromCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
