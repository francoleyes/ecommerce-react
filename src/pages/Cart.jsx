import React, { useEffect }  from 'react'
import { useNavigate } from 'react-router-dom';

import {CartProductList} from "../components/Cart";
import {useCart} from "../hooks"
import {useProduct} from "../hooks"

export function Cart() {
  const {getProductsCart} = useCart();
  const {getProducts, loading, products} = useProduct();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts()
  }, []);

  const productsInCart = getProductsCart();

  const getProductsWithQuantity = (products, cartItems) => {
    if (products) {
      return products.map(product => {
        const itemsInCart = cartItems.filter(item => item[0] === product.id);
        const quantity = itemsInCart.reduce((sum, item) => sum + item[3], 0);
        return { ...product, quantity };
      });
    } else {
      return [];
    }
  };
  
  
  const getCartProducts = (products) => {
    if (products) {
      return products.filter(product => product.quantity > 0);
    } else {
      return [];
    }
  };
  
  const categoryFilter = getCartProducts(
    getProductsWithQuantity(products, productsInCart)
  );

  return (
    <div>
        <h1 className='text-center m-5'>Carrito de compras</h1>
        {loading ? <p className='text-center'>Cargando...</p> : 
        (productsInCart.length > 0 ?
          <CartProductList product={categoryFilter} productsInCart={productsInCart} /> : 
        <div className='d-flex flex-column align-items-center'>
        <p>Tu carro está vacío.</p>
          <div>
            <button type="button" className="btn btn-success" onClick={() => navigate('/')}>
              Volver al menú principal
            </button>
          </div>
        </div>)}
    </div>
  )
}

