import React from "react";
import {useCart} from "../../hooks"


export function CartProductItem ({ product }) {
    const {removeProductCart} = useCart();

    const removeProduct = (id) => {
        removeProductCart(id);
    }

  return (
    <div className="col-md-4 d-flex justify-content-center">
      <div className="card card-product m-3 d-flex align-items-center">
        <img src={product.url} className="card-img-top" />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
          <p className="card-text">Cantidad en el carrito: {product.quantity}</p>
            <button type="button" className="btn btn-danger" onClick={() => removeProduct(product.id)}>
              Eliminar producto
            </button>
        </div>
      </div>
    </div>
  );
};
