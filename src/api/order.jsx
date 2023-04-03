import { collection, getFirestore, addDoc } from "firebase/firestore";

export async function addOrderApi(order) {
  try {
    const db = getFirestore();
    const ordersCollection = collection(db, "orden");
    const docRef = await addDoc(ordersCollection, order);
    return docRef.id;
  } catch (error) {
    throw error;
  }
}