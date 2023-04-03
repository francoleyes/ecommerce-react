import React from 'react'
import {Item} from "./Item";

export function ItemList ({product}) {
  return (
    <div className="row">
      {product.map((prod) => {
        return (
          <Item key={prod.id} 
          product={prod}/>
        )
      })}
    </div>
  );
};
