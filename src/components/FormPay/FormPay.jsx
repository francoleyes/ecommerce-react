import React, { useEffect, useState } from 'react';
import { useOrder, useCart } from "../../hooks";

export function FormPay () {  
  const {cleanProductCart, getProductsCart} = useCart();
  const {addOrder, orderId} = useOrder();
  const [order, setOrder] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailRepeat, setEmailRepeat] = useState("");
  const [phone, setPhone] = useState("");
  const [orderSent, setOrderSent] = useState(false); 

  useEffect(() => {
    const orderInCart = getProductsCart();
    setOrder(orderInCart);
  }, []);

  const sendOrder = async (e) => {
    e.preventDefault();
    const today = new Date();
    const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    let total = 0;
    const totalOrder = {
      buyer: {
        name,
        email,
        phone
      },
      date,
      items: {},
      total: 0
    };
    Object.keys(order).forEach((productId) => {
      const [id, title, price, quantity] = order[productId];
      total += price * quantity;
      totalOrder.items[productId] = {
        id,
        title,
        price,
        quantity
      };
    });
    totalOrder.total = total;
    addOrder(totalOrder);
    cleanProductCart();
    setOrderSent(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailRepeatChange = (e) => {
    setEmailRepeat(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const emailRepeatValid = email && email === emailRepeat;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmailFormat = emailRegex.test(email);

  return (
    <div className='d-flex justify-content-center'>
      <div className="card card-form">
        <div className="card-body">
          <form onSubmit={sendOrder}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre y apellido</label>
              <input type="text" className="form-control" id="name" placeholder="Escribe tu nombre y apellido" onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Escribe tu email" onChange={handleEmailChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="emailRepeat" className="form-label">Repite el email</label>
              <input type="email" className={`form-control ${emailRepeat && !emailRepeatValid ? "is-invalid" : ""}`} id="emailRepeat" placeholder="Repite tu email" onChange={handleEmailRepeatChange} required />
              {emailRepeat && !emailRepeatValid && <div className="invalid-feedback">Los emails no coinciden</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Teléfono</label>
              <input type="text" className="form-control" id="phone" placeholder="Escribe tu teléfono" onChange={handlePhoneChange} required />
            </div>
            {order?.length > 0 ? 
            <>
            { !validateEmailFormat ?
            <p className='text-center'> <strong>Poner dirección de correo válida: test@example.com</strong></p> : null}
            <button type="submit" className="btn btn-success btn-send" disabled={!validateEmailFormat || !emailRepeatValid || orderSent}>
              Enviar
            </button> 
            </>: null
          }
          </form>
          { orderId ?
          <div>
            <div className="alert alert-info mt-3" role="alert">
              Compra realizada con éxito !
            </div>
            <p className="card-text text-center"> <strong>Tu ID de compra es: {orderId}</strong></p>
          </div> : null}
        </div>
      </div>
    </div>
  )
}
