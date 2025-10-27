// Funciones: conectar con app, pedir info, conectar con BBDD, manejar estados

import React, { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList'; 

export const ItemListContainer = () => {  
    const [products, setProducts] = useState([]); // Array vacío al inicio, no va a tener datos
 
    useEffect(() => { 
        fetch("/data/products.json")  
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Hubo un problema al buscar productos");  
                }
                return res.json();
            })
            .then((data) => {
                setProducts(data); // Recibe res.json
            })
            .catch((err) => {
                console.log(err);  
            });
    }, []);

    return (
        <section>
            <h1>Bienvenida</h1>
            <ItemList list={products} /> {/* Pasa los elementos al componente ItemList */}
        </section>
    );
};


