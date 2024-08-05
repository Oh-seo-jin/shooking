import React from "react";

class MyCard extends React.Component {
  render() {
    const {cardNumber1, cardNumber2, cardNumber3, cardNumber4, cardOwner, cardDateMonth, cardDateYear} = this.props;

    return (
      <div className="w-[256px] mx-auto">
        <div className="w-full h-[161px] bg-gray-800 text-md rounded-lg relative">
          <div className="w-12 h-8 bg-[#CBBA64] absolute top-14 left-6 rounded-md"/>
            <p className="text-white absolute top-24 left-6">{cardNumber1}</p>
            <p className="text-white absolute top-24 left-20">{cardNumber2}</p>
            <p className="text-white absolute top-24 right-20">{cardNumber3 ? "••••" : ""}</p>
            <p className="text-white absolute top-24 right-6">{cardNumber4 ? "••••" : ""}</p>
            <div className="w-full absolute top-[120px] flex flex-row justify-between">
              <p className="text-white relative left-6 w-[120px] truncate">{cardOwner ? cardOwner : "NAME"}</p>
              <p className="text-white relative right-6">{cardDateMonth ? cardDateMonth : 'MM' } / {cardDateYear ? cardDateYear : "YY"}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default MyCard;