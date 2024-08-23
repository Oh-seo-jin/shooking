// context/ShopContext.js
import { createContext, useContext, useState } from 'react';

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [items, setItems] = useState([
    {path: "/img/product1.png",
      brand: "브랜드A",
      info: "편안하고 착용감이 좋은 신발",
      price: 35000,
    },
    {path: "/img/product2.png",
      brand: "브랜드A",
      info: "힙한 컬러가 매력적인 신발",
      price: 25000,
    },
    {path: "/img/product3.png",
      brand: "브랜드B",
      info: "편안하고 착용감이 좋은 신발",
      price: 35000,
    },
    {path: "/img/product4.png",
      brand: "브랜드B",
      info: "힙한 컬러가 매력적인 신발",
      price: 35000,
    },
    {path: "/img/product5.png",
      brand: "브랜드C",
      info: "편안하고 착용감이 좋은 신발",
      price: 35000,
    },
    {path: "/img/product6.png",
      brand: "브랜드C",
      info: "힙한 컬러가 매력적인 신발",
      price: 35000,
    },
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [cards, setCards] = useState([]);

  const handleAddToCart = (path, brand, info, price) => {
    setCartItems((ci) => [...ci, {
      'path': path,
      'brand': brand,
      'info': info,
      'price': price,
      'count': 1,
    }]);
  };

  const handleIncreaseCount = (i) => {
    cartItems[i].count += 1 
  };

  const handleDecreaseCount = (i) => {
    cartItems[i].count -= 1 
  };

  const addCard = (newcard) => {
    setCards((c) => [...c, newcard]);
  };

  return (
    <ShopContext.Provider value={{ items, cartItems, cards, handleAddToCart, handleIncreaseCount, handleDecreaseCount, addCard }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}
