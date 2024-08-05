import React, { Component} from "react";
import MyCard from "../components/CardForm";

class NewCard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="w-[256px]">
        <div className="w-full h-[161px] bg-gray-200 text-4xl rounded-lg flex justify-center items-center">+</div>
      </div>
    )
  }
}

function Payments() {
  let isNew = false;

  return (
    <>
    {/* header */}
    <div className='bg-white w-screen h-16 flex flex-row justify-between items-center px-20 lg:px-12'>
      <p>보유카드</p>
      <p>X</p>
    </div>
    {/* main */}
    <div className="w-80 mx-auto mb-16 flex flex-col items-center gap-12">
      {
        isNew ? <p>새로운 카드를 등록해주세요.</p>
        : 
        <div className="flex flex-col gap-3">
          <MyCard/>
          <button className="w-full bg-yellow-300 rounded-full p-2 font-bold text-sm">이 카드로 결제하기</button>
        </div>
      }
      <NewCard/>
    </div>
    </>
  )
}

export default Payments;