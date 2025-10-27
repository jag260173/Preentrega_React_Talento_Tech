import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext/useCartContext";

export const Nav = () => {
const { getTotalItems } = useCartContext ();
    // Implementa  lógica para obtener el total de items
   
   
return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to="/category/categoría1">Categoría 1</Link>
                </li>
                <li>
                    <Link to="/category/categoría2">Categoría 2</Link>
                </li>
                <li>
                    <Link to="/cart">Carrito</Link> 
                    {getTotalItems() > 0 && ( 
                        <span className="in-cart">{getTotalItems()}</span> 
                    )}
                </li>
            </ul>
        </nav>
    );
};


