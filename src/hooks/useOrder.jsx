import { useState } from "react";
import { addOrderApi } from "../api/order"

export function useOrder() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const addOrder = async (order) => {
    setLoading(true);
    try {
      const orderId = await addOrderApi(order);
      setOrderId(orderId);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
      
  return {
    loading,
    error,
    orderId,
    addOrder,
  };
}