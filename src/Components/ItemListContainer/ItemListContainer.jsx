// Funciones: conectar con app, pedir info, conectar con BBDD, manejar estados

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://6912312d52a60f10c820f175.mockapi.io/products');
        if (!response.ok) {
          throw new Error('Hubo un problema al buscar productos');
        }
        const data = await response.json();
        console.log('Productos recibidos:', data); // Verifica la estructura de los datos

        // Verifica la categoría que se está filtrando
        console.log('Categoría actual:', category);

        if (category) {
          setProducts(data.filter((prod) => prod.category && prod.category.toLowerCase() === category.toLowerCase()));
        } else {
          setProducts(data);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <section>
      <h2>Bienvenidos a la tienda Arduino</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="product-list">
          <ItemList list={products} />
        </div>
      )}
    </section>
  );
};
