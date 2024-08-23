import React, { useState } from "react";
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import { Link } from "react-router-dom";

function Products() {
  const { items, cartItems } = useShop();

  return (
    <div className='w-full h-full'>
      {/* header */}
      <div className='bg-black w-full h-16 flex flex-row justify-end items-center relative px-6 py-4 lg:px-12'>
        <Link to="/cart">
          <img src={`${process.env.PUBLIC_URL}/svg/cart.svg`} className='px-2'/>
          {cartItems.length ? <p className='bg-white font-bold text-ms rounded-full w-4 h-4 flex justify-center items-center absolute bottom-4'>{cartItems.length}</p> : ""}
        </Link>
      </div>
      {/* main */}
      <div className='p-6 md:px-20 lg:w-[840px] mx-auto'>
        <h1 className='font-bold text-2xl mt-4 mb-1'>신발 상품 목록</h1>
        <p className='text-base mb-6'>현재 {items.length}개의 상품이 있습니다.</p>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
          {items.map((p, i) => {
            return <ProductCard key={i} path={`${process.env.PUBLIC_URL}${p.path}`} brand={p.brand} info={p.info} price={p.price}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Products;