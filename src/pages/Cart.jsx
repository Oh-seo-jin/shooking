import { useShop } from '../context/ShopContext';
import CartProductCard from "../components/CartProductCard";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useState } from 'react';
import Payments from '../pages/Payments'
import AddPayment  from '../pages/AddPayment';

Modal.setAppElement('#root');

export default function Cart() {

  const { cartItems } = useShop();
  const totalPrice = cartItems.reduce((total, item) => {
    console.log(`total: ${total}, item: ${item}`)
    return total + (item.price * item.count);
  }, 0)

  function formatPrice(amount) {
    // 천 단위로 구분하는 정규 표현식
    const formattedPrice = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${formattedPrice}원`;
  }

  const {  } = useShop();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [curPage, setCurPage] = useState("payments");
  
  const openModal = () => {
    setIsModalOpen(true);
    console.log("open!");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToAddPayment = () => {
    setCurPage("addPayment");
  }

  const goToPayments = () => {
    setCurPage("payments");
  }

  return(
    <div className='w-full h-full'>
      {console.log(cartItems)}
      {/* header */}
      <div className='bg-black w-full h-16 flex flex-row justify-start items-center relative px-6 py-4 lg:px-12'>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/svg/arrow.svg`} className='px-2'/>
        </Link>
      </div>
      {/* main */}
      <div className='p-6 md:px-20 lg:w-[840px] mx-auto flex flex-col'>
        <h1 className='font-bold text-2xl mt-4 mb-1'>장바구니</h1>
        <p className='text-base mb-6'>현재 {cartItems.length}개의 상품이 담겨있습니다.</p>
        <div className='flex flex-col gap-4'>
          {cartItems.map((c, i) => {
            return <CartProductCard key={i} path={`${c.path}`} brand={c.brand} info={c.info} price={c.price} count={c.count}/>
          })}
        </div>
        <hr className='my-4'/>
        <div>
          <div className='flex flex-row justify-between font-bold'>
            <p className='text-sm'>상품 금액</p>
            <p className='text-xl'>{formatPrice(totalPrice)}</p>
          </div>
          {cartItems.length ?
          <div className='flex flex-row justify-between font-bold'>
            <p className='text-sm'>배송비</p>
            <p className='text-xl'>{totalPrice >= 100000 ? formatPrice(0) : formatPrice(3000)}</p>
          </div>
           : ""}
          <hr className='my-4'/>
          {cartItems.length ?
          <div className='flex flex-row justify-between font-bold'>
            <p className='text-sm'>총 금액</p>
            <p className='text-xl'>{totalPrice >= 100000 ? formatPrice(totalPrice) : formatPrice(totalPrice+3000)}</p>
          </div>
           : ""}
        </div>
        {cartItems.length ? 
          <button onClick={openModal}
            className='my-10 mx-auto w-full bg-black text-white rounded-3xl p-2'>결제하기
          </button>
        : ""}
        {/* modal */}
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel='결제'>
        {curPage === "payments" ? (
            <Payments handleClose={closeModal} goToAddPayment={goToAddPayment}/>
        ) : (
            <AddPayment handleClose={closeModal} goToPayment={goToPayments}/>
        )}
        </Modal>
      </div>
    </div>
  ) 
}