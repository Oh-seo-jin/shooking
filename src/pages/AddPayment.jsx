import { useState, useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import MyCard from "../components/CardForm";
import { Link } from "react-router-dom";
import { CardsContext } from "./Payments";

export default function AddPayment({ handleClose, goToPayments }) {

  const {
    register, // 이번트 객체 생성
    handleSubmit, // onSubmit에 들어갈 함수
    formState: {errors},  // register의 에러 메세지 자동 출력
  } = useForm({
    mode: "onBlur",
  });

  const [cardOwnerLen, setCardOwnerLen] = useState(0);
  const cards = useContext(CardsContext);

  /* 유효성 검사 */
  const validCardNumber = {
    required: {message: "카드번호를 입력해주세요"},
    pattern: {value:/^[0-9]+$/, message: "숫자만 입력해주세요"},
  }

  const validMonthNumber = {
    required: {value: true, message: "입력해주세요"},
    pattern: {value: /^[0-9]+$/, message: "숫자만 입력해주세요"},
    max: 12,
    min: 1,
  }

  const cardNumber1 = useRef();
  const cardNumber2 = useRef();
  const cardNumber3 = useRef();
  const cardNumber4 = useRef();
  const cardDateMonth = useRef();
  const cardDateYear = useRef();
  const cardOwner = useRef();
  const cardCode = useRef();
  const cardPassword1 = useRef();
  const cardPassword2 = useRef();

  const handleInput = (e, nextField) => {
    if (e.target.value.length >= e.target.maxLength) {
      nextField.current.focus();
    }
  }

  const onValid = (data) => {
    console.log(data);
    alert("성공!");
  }
  const onError = (errors) => {
    console.log(errors);
    alert("실패!");
  }

  return (
    <div>
      {/* header */}
      <div className='bg-white w-full h-16 flex flex-row items-center md:px-12 relative'>
        <button onClick={goToPayments} className="absolute left-10">
          <img src={`${process.env.PUBLIC_URL}/svg/prevButton.svg`}/>
        </button>
        <p className="absolute left-24">카드 추가</p>
        <button onClick={handleClose} className="absolute right-10">
          <img src={`${process.env.PUBLIC_URL}/svg/cancel.svg`} />
        </button>
      </div>
      {/* card image */}
      <div>
        <MyCard 
          cardNumber1={cardNumber1.current?.value}
          cardNumber2={cardNumber2.current?.value}
          cardNumber3={cardNumber3.current?.value.length}
          cardNumber4={cardNumber4.current?.value.length}
          cardOwner={cardOwner.current?.value}
          cardDateMonth={cardDateMonth.current?.value}
          cardDateYear={cardDateYear.current?.value}
        />
      </div>
      {/* form */}
      <form onSubmit={handleSubmit(onValid, onError)} className="w-full sm:w-[500px] mx-auto flex flex-col p-6 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="cardNumber1" className="text-xs">카드 번호</label>
          <div className="bg-gray-100 w-full p-2 font-bold flex flex-row justify-center rounded-lg">
            <input 
              type="text" 
              id="cardNumber1" 
              {...register("cardNumber1", validCardNumber)} 
              placeholder="0000" 
              maxLength="4"
              className="bg-red-500 text-center w-16 bg-transparent"
              ref={cardNumber1}
              onInput={(e) => handleInput(e, cardNumber2)}
            />-
            <input 
              type="text" 
              id="cardNumber2" 
              {...register("cardNumber2", validCardNumber)} 
              placeholder="0000" 
              maxLength="4"
              className="text-center w-16 bg-transparent"
              ref={cardNumber2}
              onInput={(e) => handleInput(e, cardNumber3)}
            />-
            <input 
              type="password" 
              id="cardNumber3" 
              {...register("cardNumber3", validCardNumber)} 
              placeholder="0000" 
              maxLength="4"
              className="text-center w-16 bg-transparent"
              ref={cardNumber3}
              onInput={(e) => handleInput(e, cardNumber4)}
            />-
            <input 
              type="password" 
              id="cardNumber4" 
              {...register("cardNumber4", validCardNumber)} 
              placeholder="0000" 
              maxLength="4"
              className="text-center w-16 bg-transparent"
              ref={cardNumber4}
              onInput={(e) => handleInput(e, cardDateMonth)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cardDateMonth" className="text-xs">만료일</label>
          <div className="bg-gray-100 w-40 p-2 font-bold flex flex-row justify-center rounded-lg">
            <input 
              type="text" 
              id="cardDateMonth" 
              {...register("cardDateMonth", validMonthNumber)} 
              placeholder="MM" 
              maxLength="2"
              className="text-center w-10 bg-transparent"
              ref={cardDateMonth}
              onInput={(e) => handleInput(e, cardDateYear)}/>/
            <input 
              type="text" 
              id="cardDateYear" 
              {...register("cardDateYear")} 
              placeholder="YY" 
              maxLength="2"
              className="text-center w-10 bg-transparent"
              ref={cardDateYear}
              onInput={(e) => handleInput(e, cardOwner)}/>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-xs">
            <label htmlFor="cardOwner">카드 소유자 이름</label>
            <p>{cardOwnerLen} / 30</p>
          </div>
          <input 
            type="text" 
            {...register("cardOwner")} 
            placeholder="카드에 표시된 이름과 동일하게 입력하세요." 
            className="bg-gray-100 w-full p-2 text-left font-bold rounded-lg" 
            ref={cardOwner}
            maxLength="30"
            onChange={(e) => setCardOwnerLen(e.target.value.length)}
            onInput={(e) => handleInput(e, cardCode)}/>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cardNumber" className="text-xs">보안 코드(CVC/CVV)</label>
          <div className="flex flex-row gap-2 items-center">
            <input 
            type="password" 
            {...register("cardCode", {required: true})} 
            className="bg-gray-100 w-20 p-2 text-center font-bold flex rounded-lg" 
            ref={cardCode}
            maxLength="3"
            onInput={(e) => handleInput(e, cardPassword1)}/>
            <div className="relavtive group flex flex-row gap-2">
            <span className="w-6 h-6 border rounded-full font-bold text-center cursor-pointer text-gray-400 hover:">?</span>
            <span className="opacity-0 bg-yellow-100 border px-2 py-1 text-sm text-gray-500 group-hover:opacity-100 transition-opaity">카드 뒷면의 3자리 숫자를 입력해주세요</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
        <label htmlFor="cardNumber" className="text-xs">카드 비밀번호</label>
          <div className="w-full font-bold flex flex-row justify-start gap-1">
            <input 
              type="password" 
              {...register("cardPassword1")} 
              className="w-8 text-center bg-gray-100 p-2 rounded-lg"
              maxLength="1" 
              onInput={(e) => handleInput(e, cardPassword2)}
              ref={cardPassword1}/>
            <input 
              type="password" 
              {...register("cardPassword2")} 
              className="w-8 text-center bg-gray-100 p-2 rounded-lg" 
              maxLength="1"
              ref={cardPassword2}/>
            <input type="password" {...register("cardPassword3", {disabled: true})} value="*" className="w-8 text-center text-black bg-transparent p-2" />
            <input type="password" {...register("cardPassword4", {disabled: true})} value="*" className="w-8 text-center text-black bg-transparent p-2" />
          </div>
        </div>
        <button type="submit" className="w-full p-2 my-4 rounded-full bg-black text-white font-bold text-center cursor-pointer">작성 완료</button>
      </form>
    </div>
  )
}