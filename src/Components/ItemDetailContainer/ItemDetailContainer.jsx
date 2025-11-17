import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://6912312d52a60f10c820f175.mockapi.io/products/${id}`);
        if (!response.ok) {
          throw new Error("No se encontró el producto");
        }
        const data = await response.json();
        setDetail(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct(); // ✅ Invocar la función
  }, [id]);

  return (
    <main>
      {error ? (
        <p>{error}</p>
      ) : Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando...</p>
      )}
    </main>
  );
};