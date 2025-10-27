import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ItemDetail} from '../ItemDetail/ItemDetail'; 

export const ItemDetailContainer = () => {
const [detail, setDetail] = useState({});
const [error, setError] = useState(null);
const { id } = useParams ();

useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("No se encontro el producto");
                }
                return res.json();
            })
            .then((data) => {
                const found = data.find(prod => prod.id === parseInt (id));
                if (found) {
                    setDetail(found);
                } else {
                    throw new Error("Producto no encontrado");
                }
            })
            .catch(err => setError(err.message));
    }, [id]);

    return (
   <main>
    {error ? <p>{error}</p> :Object.keys(detail).length ? (
    <ItemDetail detail={detail} />
   ) : (
    <p>Cargando...</p>
  )}
  </main>

  );
};