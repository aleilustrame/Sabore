import { useState, useEffect } from 'react';
import { productsData } from '../Data/Product';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return { products, loading };
}