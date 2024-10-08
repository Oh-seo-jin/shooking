import React, { Component, useState, createContext } from "react";
import MyCard from "../components/CardForm";
import { Link } from "react-router-dom";

const cards = [
  // {cardNumber1: "0000",
  //   cardNumber2: "0000",
  //   cardNumber3: "0000",
  //   cardNumber4: "0000",
  //   cardOwner: "KAI",
  //   cardDateMonth: "02",
  //   cardDateYear: "25"
  // }
]

export const CardsContext = createContext([]);

export default function Payments({ handleClose, goToAddPayment }) {

  return (
    <CardsContext.Provider value={cards}>
    {/* header */}
    <div className='bg-white w-full h-16 flex flex-row items-center px-20 lg:px-20 relative'>
      <p className="absolute left-24">보유카드</p>
      <button onClick={handleClose} className="absolute right-10">
        <img src={`${process.env.PUBLIC_URL}/svg/cancel.svg`} />
      </button>
    </div>
    {/* main */}
    <div className="w-80 mx-auto flex flex-col items-center gap-8">
      {cards.length ? 
        <div className="flex flex-col gap-3">
          {cards.map((c) => {
            <MyCard card={c}/>
          })}
          <button className="w-full bg-yellow-300 rounded-full p-2 font-bold text-sm">이 카드로 결제하기</button>
        </div>
        : 
        <p>새로운 카드를 등록해주세요.</p>
      }
      <button onClick={goToAddPayment} className="w-[256px]">
        <div className="w-full h-[161px] bg-gray-200 text-4xl rounded-lg flex justify-center items-center">+</div>
      </button>
    </div>
    </CardsContext.Provider>
  )
}