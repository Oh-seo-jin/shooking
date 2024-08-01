import React, { Component} from "react";

class NewCard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="w-[342px]">
        <div className="w-full h-[215px] bg-gray-200 text-4xl">+</div>
      </div>
    )
  }
}

class Payments extends Component {
  render() {
    return (
      <>
      {/* header */}
      <div className='bg-white w-screen h-16 flex flex-row justify-between items-center px-20 lg:px-12'>
        <p>보유카드</p>
        <button className="w-full bg-yellow-300 rounded-full p-2 font-bold text-ms">이 카드로 결제하기</button>

        <p>X</p>
      </div>
      {/* main */}
      <div>
        {/* 등록된 카드가 없을 때에만 */}
        <p>새로운 카드를 등록해주세요.</p>
        {/* <MyCard cardNumber="1111222233334444" cardOwner="JUN" cardDate="0421"/> */}
        <NewCard/>
      </div>
      </>
    )
  }
}

export default Payments;