import React from 'react'
import { useNavigate } from 'react-router-dom';

import {CartProductItem} from "./CartProductItem";
import {useCart} from "../../hooks"

export function CartProductList ({product}){
  const {cleanProductCart} = useCart();
  const navigate = useNavigate();

  const getTotal = () => {
    let total = 0;
    product.forEach(element => {
      total += element.quantity * element.price
    });
    return total
  }

  return (
    <div className="row d-flex justify-content-center">
      {product.map((prod) => {
        return (
          <CartProductItem key={prod.id} 
          product={prod}/>
        )
      })}
      <div className='d-flex justify-content-center mt-5'>
        <button type="button" className="btn btn-warning m-2" onClick={() => cleanProductCart()}>
          Vaciar Carrito
        </button>
        <button type="button" className="btn btn-info m-2" onClick={() => navigate('/pay')}>
          Ir a comprar
        </button>
      </div>
      <div className="alert alert-dark mt-5" role="alert">
        <p className='text-center mt-3'>El total del pedido es: <strong>${getTotal()}</strong></p>
      </div>
    </div>
  );
};
