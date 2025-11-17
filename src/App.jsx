import { CartProvider } from './Context/CartContext/CartProvider.jsx';
import Footer from './Components/Footer/Footer';
import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import { Cart } from './Components/Cart/Cart';
import { ProductFormContainer } from "./Components/adminComponents/ProductFormContainer/ProductFormContainer.jsx";
import { MainLayout} from "./layouts/MainLayout.jsx";
import { AdminLayout} from "./layouts/AdminLayout.jsx";
import "./App.css";
import { RutaProtegida } from './Components/RutaProtegida/RutaProtegida.jsx';
import { Login } from './Components/Login/Login.jsx';

function App() {
    return (
      <BrowserRouter>  
        <CartProvider>
           <Routes>
              <Route element={<MainLayout/>}>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:category" element={<ItemListContainer />} />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                </Route>

                console.log("Configurando rutas de administración");
                
                <Route path="/admin" element={<AdminLayout/>}> 
                <Route index element={<Login />} />
                <Route path= "alta-productos" element={<RutaProtegida><ProductFormContainer /></RutaProtegida>} />
              </Route>
            </Routes>
            <Footer />
        </CartProvider>
      </BrowserRouter>
    );
}

export default App;
