import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Cambiamos la logica de las funciones SI usamos el Count para agregar "cantidad"

  const exists = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist;
  };

  /* -------------------------------------------------------------------------- */
  /*                           Agregamos map y spread operator                  */
  /* -------------------------------------------------------------------------- */
  const addItem = (item) => {
    if (exists(item.id)) {
      //map, itero el carrito, cuido mutacion a nivel del array
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          //cuido mutacion a nivel de objeto
          return { ...prod, quantity: prod.quantity + item.quantity };//creo una copia, sumo lo que existia en el carrito + lo nuevo
        } else {
          return prod;//el metodo map siempre debe tener un return
        }
      });
      setCart(updatedCart);//actualiza la nueva cantidad en el carrito
      alert(`Agregado al carrito`);
    } else {
      setCart([...cart, item]);
      alert(`${item.name} agregado`);
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                        Eliminar producto con filter                        */
  /* -------------------------------------------------------------------------- */
  const deleteItem = (id) => {
    const filtered = cart.filter((p) => p.id !== id);//filtra los distinto de 
    setCart(filtered);
    alert("Producto eliminado");
  };

  /* -------------------------------------------------------------------------- */
  /*                               Vaciar carrito                               */
  /* -------------------------------------------------------------------------- */
  const clearCart = () => {
    setCart([]);
  };

  /* -------------------------------------------------------------------------- */
  /*                    Calcular total de ítems en el carrito                   */
  /* -------------------------------------------------------------------------- */
  const getTotalItems = () => {
    const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);//reduce metodo que acumula los p.cuantity y arranca de 0
    return totalItems;
  };

  /* -------------------------------------------------------------------------- */
  /*                               Calcular total                               */
  /* -------------------------------------------------------------------------- */
  const total = () => {
    const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

    return Math.round(total * 100) / 100;//cambia el lugar de la coma a 2 decimales
  };

  const checkout = () => {
    const ok = confirm("¿Serguro que quiere finalizar la compra?");//confirm retorna un booleano

    if (ok) {
      alert("¡Compra realizada con éxito!");
      clearCart();
    }
  };

  const values = {
    cart,
    addItem,
    clearCart,
    getTotalItems,
    deleteItem,
    total,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
