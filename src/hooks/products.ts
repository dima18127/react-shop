import { useEffect, useState } from "react";
import { Iproduct } from "../models";

export function useProduct() {
    const [products, setProducts ] = useState<Iproduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

async function fetchProducts() {
  try {
    setLoading(true);
    let response = await fetch('http://fakestoreapi.com/products?limit=5');
    if (!response.ok) {
      throw new Error('Network response was not OK.');
    }
    const jsonData = await response.json();  
    setProducts(jsonData);
    setLoading(false);
  } catch (error:unknown) {
    setLoading(false);
    if (typeof error === 'string') { 
      setError(error);
    } else {
      setError('Error fetching products. Please try again later.');
    }
  }
}

useEffect(()=>{
  fetchProducts()
},[])

return {products,loading,error}
}