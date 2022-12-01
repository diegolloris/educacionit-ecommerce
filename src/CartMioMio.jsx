import React from "react";
import { Link } from "react-router-dom";

export const CartMioMio = () => {
  return (
    <>
      <div className="carrito">
        <h2>MioMio</h2>
        <h3>Tu Compra</h3>
        <hr />
      </div>

      <div className="center">
        <div className="cart">
          <h3>Lorem </h3>
          <p>Talle: S</p>
          <p>Color: Negro</p>
          <p>Precio:$1500</p>

          <div id="mainDiv">
            <button id="minus">-</button>
            <span id="numberPlace">0</span>
            <button id="plus">+</button>
          </div>
        </div>
        <br />
        <div className="cart">
          <h3>Lorem </h3>
          <p>Talle: S</p>
          <p>Color: Negro</p>
          <p>Precio:$1500</p>

          <div id="mainDiv">
            <button id="minus">-</button>
            <span id="numberPlace">0</span>
            <button id="plus">+</button>
          </div>
        </div>
      </div>
      <div className="center">
        <Link to={"/home"}> Seguir Comprando </Link>
        <a href="#"> PAGAR $2500 </a>
      </div>
    </>
  );
};
