import {Item} from "../Item/Item";
import { useCartContext } from "../../Context/CartContext/useCartContext";

export const ItemDetail = ({ detail }) => {
const {addItem}=useCartContext();
    return (

<Item {...detail}> <button onClick={()=>addItem(detail)}>Enviar al carrito</button>
</Item>

);

};



