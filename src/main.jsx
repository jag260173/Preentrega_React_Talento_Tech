import { StrictMode } from 'react' // Importa StrictMode para ayudar a identificar problemas en la aplicación
import { createRoot } from 'react-dom/client' // Importa createRoot para crear un root de React
import './index.css' // Importa el archivo de estilos CSS principal
import App from './App.jsx' // Importa el componente principal de la aplicación
import { AuthProvider } from './Context/AuthContext/AuthProvider.jsx'

// Crea un root en el elemento con id 'root' y renderiza la aplicación
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </StrictMode>
);
/*AuthProvider: Componente que se encarga de proporcionar el contexto de 
autenticación a toda la aplicación. Al envolver <App /> con <AuthProvider>, 
todos los componentes dentro de App tendrán acceso al contexto de autenticación.*/
