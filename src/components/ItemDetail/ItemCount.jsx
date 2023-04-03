import React, { useState } from "react";
import { useCart } from "../../hooks";

export function ItemCount(props) {
  const { product, onAddToCart } = props;
  const { id, title, price, stock } = product;
  const { addProductCart } = useCart();

  const [counter, setCounter] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const addQty = () => {
    counter === parseInt(stock) ? parseInt(stock) : setCounter(counter + 1);
  };

  const substractQty = () => {
    counter === 1 ? 1 : setCounter(counter - 1);
  };

  const addItem = () => {
    addProductCart(id, title, price, counter);
    setAddedToCart(true);
    onAddToCart();
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="text-center counter">
        <button
          type="button"
          className="btn btn-primary"
          onClick={substractQty}
        >
          -
        </button>

        <div>{counter}</div>

        <button type="button" className="btn btn-primary" onClick={addQty}>
          +
        </button>
      </div>

      {addedToCart ? (
        <button type="button" className="btn btn-warning mt-2" disabled>
          Agregado al carrito
        </button>
      ) : (
        <button type="button" className="btn btn-warning mt-2" onClick={addItem}>
          Agregar al carrito
        </button>
      )}
    </div>
  );
}
