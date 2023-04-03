import React from "react";
import { Link } from "react-router-dom";

export function Item ({ product }) {
  return (
    <div className="col-md-4 d-flex justify-content-center align-items-center">
      <div className="card card-product m-3">
        <img src={product.url} className="card-img-top" />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
          <Link to={`/item/${product.id}`}>
            <button type="button" className="btn btn-primary">
              Detalle
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

