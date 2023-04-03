import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import {ItemList} from "../components/ItemList"
import {useProduct} from "../hooks"

export function ItemListContainer() {
  const {id} = useParams();
  const {getProducts, loading, products} = useProduct();

  
  useEffect(() => {
    getProducts();
  }, []);
  

  const categoryFilter = products ? products.filter(product => product.category == id) : [];

  return (
    <section className="mb-5">
      <h1 className="text-center mt-5">MDZ DRINKS</h1>
      {loading ? <p className='text-center'>Cargando...</p> : 
      (id ? <ItemList product={categoryFilter} /> : <ItemList product={products}/>)}
    </section>
  );
};