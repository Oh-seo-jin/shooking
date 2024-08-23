import "./App.css";
import Router from "./Router";
import { ShopProvider } from './context/ShopContext';

function App() {
  return(
    <ShopProvider>
      <Router/>
    </ShopProvider>
  )
}

export default App;
