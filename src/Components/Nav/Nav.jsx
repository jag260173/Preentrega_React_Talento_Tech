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
                    <Link to="/category/sensores">Sensores</Link>
                </li>
                <li>
                    <Link to="/category/placas">Placas</Link>
                </li>
                <li>
                    <Link to="/category/actuadores">Actuadores</Link>
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


