import { CartContext } from "./CartContext";
import { useState } from "react";

// Estado para almacenar los elementos del carrito
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para verificar si un producto ya existe en el carrito  
    const exists = (id) => {
        // Utiliza some para comprobar si algún producto tiene el mismo id en el carrito retorna booleano
    const exist = cart.some((p) => p.id === id);
    return exist;
    };

    // Función para agregar un nuevo item al carrito  
    const addItem = (item) => { 
        // Verifica si el producto ya existe
        if (exists(item.id)) {
            alert("El producto ya existe en el carrito");
            return; // Sale de la función si el producto ya está en el carrito
        }

        setCart([...cart, item]);//todo lo que tenga cart + el producto nuevo
        alert(`${item.name} agregado`); 
    };

    // Función para limpiar el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Función para obtener el total de items en el carrito
    const getTotalItems = () => {
        return cart.length; // Retorna la longitud del carrito
    };

    // Objeto que contiene los valores que se proporcionarán a los consumidores del contexto   
    const values = { cart, addItem, clearCart, getTotalItems };

    return (
        <CartContext.Provider value={values}>
            {children} {/* Renderiza los hijos que usan este contexto */}
        </CartContext.Provider>
    );
};
