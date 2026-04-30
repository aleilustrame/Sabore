import { useState, useEffect } from 'react';
import Papa from 'papaparse'; // Librería gratuita y ligera

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRifQMhtLCMKT9frPl8W-DV-AwfZX4zdSbYDp64FMp9vWRMwNBNFq3wjH0Wf1ZFLGeLrNz6lkEtnn2F/pub?output=csv';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(CSV_URL);
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(result.value);
        
        // Convertimos el CSV a Objetos automáticamente
        Papa.parse(csv, {
          header: true, // Usa la primera fila como nombres de propiedad
          skipEmptyLines: true,
          complete: (results) => {
            // Transformamos los datos para asegurar que los precios sean números
            const transformed = results.data.map(item => ({
              ...item,
              id: parseInt(item.id),
              price: parseInt(item.price)
            }));
            setProducts(transformed);
            setLoading(false);
          }
        });
      } catch (error) {
        console.error("Error cargando el catálogo:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};