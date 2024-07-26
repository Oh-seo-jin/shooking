import { Component } from 'react';

class ProductCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            disabled: false
        };
        this.handleCart = this.handleCart.bind(this);
        this.handlePurchase = this.handlePurchase.bind(this);
    }

    handleCart() {
        this.setState({disabled: true});
        this.props.setCount(this.props.count + 1);
    }

    handlePurchase() {
        const confirmed = window.confirm("결제 페이지로 이동하시겠습니까?");
        if (confirmed) {
            // navigator
            console.log("User Clicked Yes");
        } else {
            console.log("User Clicked No");
        }
    }
    
    render() {
        const { path, name, info, price } = this.props;
        const { disabled } = this.state;

        return (
            <div className="lg:h-[400px] w-full h-[320px] flex flex-col items-center justify-center rounded-2xl border border-gray-100 overflow-hidden">
                <img src={path} className="w-full h-1/2 lg:h-2/3 object-cover"/>
                <div className="w-full h-1/2 lg:h-1/3 px-4 py-4 flex flex-col gap-1">
                    <h3 className="font-bold text-base">{name}</h3>
                    <p className="text-sm text-gray-500">{info}</p>
                    <p className="font-bold text-base">{price}</p>
                    <div className='flex flex-row gap-2'>
                    <button onClick={this.handleCart} className={`bg-black text-white text-xs p-1 w-11 rounded-xl ${disabled ? 'bg-gray-300 text-black font-bold cursor-not-allowed': ''}`} disabled={disabled ? "disabled" : ""}>{disabled ? "담김!" : "담기"}</button>
                    <button onClick={this.handlePurchase} className={`bg-yellow-400 text-black text-xs p-1 w-11 rounded-xl`}>구매</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard;