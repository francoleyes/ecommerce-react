import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

import {ItemDetail} from "../components/ItemDetail"
import {useProduct} from "../hooks"

export function ItemDetailContainer(){
  const {id} = useParams();
  const {getProducts, loading, products} = useProduct();

  useEffect(() => {
    getProducts()
  }, []);

  const productsFilter = products && products.filter(product => product.id == id);

  return (
    <div className="row d-flex justify-content-center">
      {loading ? (
        <div className='text-center'>Cargando datos...</div>
      ) : productsFilter && productsFilter.length > 0 ? (
        <ItemDetail product={productsFilter[0]} />
      ) : (
        <div className="text-center mt-5"> <strong>No se encontró el producto con el id {id}.</strong></div>
      )}
    </div>
  );
}
