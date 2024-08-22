import React, { useState } from "react";
import ProductCard from '../components/ProductCard';

function Products() {
  const [count, setCount] = useState(0);
  const productList = [
    {img: "/img/product1.png",
      brand: "브랜드A",
      info: "편안하고 착용감이 좋은 신발",
      price: "35,000원",
    },
    {img: "/img/product2.png",
      brand: "브랜드A",
      info: "힙한 컬러가 매력적인 신발",
      price: "25,000원",
    },
    {img: "/img/product3.png",
      brand: "브랜드B",
      info: "편안하고 착용감이 좋은 신발",
      price: "35,000원",
    },
    {img: "/img/product4.png",
      brand: "브랜드B",
      info: "힙한 컬러가 매력적인 신발",
      price: "35,000원",
    },
    {img: "/img/product5.png",
      brand: "브랜드C",
      info: "편안하고 착용감이 좋은 신발",
      price: "35,000원",
    },
    {img: "/img/product6.png",
      brand: "브랜드C",
      info: "힙한 컬러가 매력적인 신발",
      price: "35,000원",
    },
  ]

  return (
    <div className='w-full h-full'>
      {/* header */}
      <div className='bg-black w-full h-16 flex flex-row justify-end items-center relative px-6 py-4 lg:px-12'>
        <img src={`${process.env.PUBLIC_URL}/svg/cart.svg`} className='px-2'/>
        {count ? <p className='bg-white font-bold text-ms rounded-full w-4 h-4 flex justify-center items-center absolute bottom-4'>{count}</p> : ""}
      </div>
      {/* main */}
      <div className='p-6 md:px-20 lg:w-[840px] mx-auto'>
        <h1 className='font-bold text-2xl mt-4 mb-1'>신발 상품 목록</h1>
        <p className='text-base mb-6'>현재 {productList.length}개의 상품이 있습니다.</p>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
          {productList.map((p) => {
            console.log(p);
            return <ProductCard path={`${process.env.PUBLIC_URL}${p.img}`} name={p.brand} info={p.info} price={p.price} count={count} setCount={setCount}/>
          })}
        </div>
    </div>
  </div>
  )
}

export default Products;