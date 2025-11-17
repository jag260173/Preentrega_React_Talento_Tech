/*Resumen de las funcionalidades:
useState: Se utiliza para manejar el estado del usuario dentro del componente.
sessionStorage: Se usa para almacenar la información de sesión del usuario, permitiendo que persista incluso si el usuario recarga la página.
login: Función que verifica las credenciales del usuario y, si son correctas, guarda la sesión en el estado y en sessionStorage.
AuthContext.Provider: Proporciona el estado del usuario y la función de inicio de sesión a los componentes hijos que lo necesiten.*/

import { useState } from "react";
import { AuthContext } from './AuthContext';


// Componente AuthProvider que proporciona contexto de autenticación
export const AuthProvider = ({ children }) => {
   // Estado para almacenar la información del usuario
   const [user, setUser] = useState (() => {
       // Intenta recuperar la sesión guardada en sessionStorage
       const saved = sessionStorage.getItem("session");
       if (saved) {
           // Si hay una sesión guardada, la convierte de JSON a objeto
           return JSON.parse(saved);
       }
       // Si no hay sesión guardada, retorna null
       return null;
   });

   // Función para manejar el inicio de sesión
   const login = (name, password) => {
       // Verifica si las credenciales son correctas
       if (name === "admin" && password === "1234") {
           // Crea un objeto de sesión con el nombre del usuario
           const session = { name }; // { name: "admin" }
           setUser(session); // Actualiza el estado del usuario
           // Guarda la sesión en sessionStorage como un string JSON
           sessionStorage.setItem("session", JSON.stringify(session));
           return true; // Indica que el inicio de sesión fue exitoso
       }
       return false; // Indica que el inicio de sesión falló
   };

   // Proveedor del contexto de autenticación que expone el usuario y la función de inicio de sesión
   return (
       <AuthContext.Provider value={{ user, login }}>
           {children} 
       </AuthContext.Provider>
   );// Renderiza los componentes hijos
};
