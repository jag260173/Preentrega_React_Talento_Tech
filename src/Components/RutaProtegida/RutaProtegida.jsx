
import { useAuthContext } from '/src/Context/AuthContext/useAuthContext.js';

import { Navigate } from "react-router-dom";

export const RutaProtegida = ({ children }) => {
  const { user } = useAuthContext();// si no existe un usuario en sessionStorage nos envia a home
  
  if (!user){
    return <Navigate to="/" replace />; 
  }
  
  return children;
};