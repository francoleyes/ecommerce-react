import { collection, getDocs, getFirestore } from "firebase/firestore";

export async function getProductsApi() {
  try {
    const db = getFirestore();
    const products = await getDocs(collection(db, "drinks"));
    const items = products.docs.map(prod => {
      return { ...prod.data(), id: prod.id };
    });
    return items;
  } catch (error) {
    throw error;
  }
}
