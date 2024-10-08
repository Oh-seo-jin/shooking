import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import Cart from './pages/Cart';

export default function Router() {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Products/>}/>
=        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}