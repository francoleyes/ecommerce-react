import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { ItemCount } from "./ItemCount";


export function ItemDetail({ product }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    setIsAddedToCart(true);
  };

  const keepBuying = () => {
    setIsAddedToCart(false);
    navigate("/");
  }

  return (
    <div className="d-flex justify-content-center m-5">
      <div className="card card-product">
        <img src={product.url} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text text-success-emphasis">${product.price}</p>
          <p className="card-text text-danger">Stock: {product.stock}</p>
          <ItemCount product={product} onAddToCart={handleAddToCart} />
          {isAddedToCart && (
            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-info m-1" onClick={() => keepBuying()}>
                Seguir comprando
              </button>
              <button className="btn btn-dark m-1" onClick={() => navigate("/cart")}>
                Ir al carrito
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
