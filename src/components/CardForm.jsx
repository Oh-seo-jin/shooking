class MyCard extends Component {
  render() {
    const {cardNumber, cardOwner, cardDate} = this.props;

    return (
      <div className="w-[342px]">
        <div className="w-full h-[215px] bg-black text-lg">
          <div className="w-16 h-10 bg-yellow-600"/>
          <p className="text-white ">{cardNumber}</p>
          <div className="flex flex-row justify-between">
            <p className="text-white">{cardOwner}</p>
            <p className="text-white">{cardDate}</p>
          </div>
        </div>
        <button className="w-full bg-yellow-300 rounded-full p-2 font-bold text-ms">이 카드로 결제하기</button>
      </div>
    )
  }
}