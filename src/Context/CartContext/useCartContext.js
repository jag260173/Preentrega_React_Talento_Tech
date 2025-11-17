import { useContext } from "react";
import {CartContext } from "./CartContext";

//exporto el contexto creado pq lo uso en el custom hook (useCartContext)
export const useCartContext = () => {
    return  useContext(CartContext)
};
