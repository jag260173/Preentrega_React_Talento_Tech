import { useContext } from "react";
import { AuthContext } from "./AuthContext";

// Hook para usar el contexto de autenticación
export const useAuthContext = () => {
    return useContext(AuthContext);
};