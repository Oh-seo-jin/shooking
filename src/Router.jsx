import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import AddPayment from './pages/AddPayment';
import Payments from './pages/Payments'
import NameForm from './components/ExampleFrom';


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shooking" element={<Products/>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/payments/add" element={<AddPayment/>}/>
      </Routes>
    </BrowserRouter>
  );
}