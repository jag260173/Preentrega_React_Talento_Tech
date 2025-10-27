import { CartProvider } from './Context/CartContext/CartProvider.jsx';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Nav } from './Components/Nav/Nav';
import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import "./App.css";

function App() {
    return (
      <BrowserRouter>  
        <CartProvider>
          <div className="App">
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:category" element={<ItemListContainer />} />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
    );
}

export default App;
