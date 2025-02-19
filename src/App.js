import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopCategory } from './pages/ShopCategory';
import { LoginSignup } from './pages/LoginSignup';
import { Shop } from './pages/Shop'; 
import { Product } from './pages/Product';
import { Cart } from './pages/Cart'; 
import Footer from './components/Footer/Footer';
import ShopContextProvider from './context/ShopContext';
import veg_banner from './components/Assets/banner_veg.png';
import nonveg_banner from './components/Assets/banner_nonveg.png';

function App() {
  return (
    <ShopContextProvider>  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/veg" element={<ShopCategory banner={veg_banner} category="veg" />} />
          <Route path="/nonveg" element={<ShopCategory banner={nonveg_banner} category="nonveg" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider> 
  );
}

export default App;
