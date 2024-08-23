import { Component, useState } from 'react';
import { ShopContext  } from '../context/ShopContext';
import Modal from "react-modal";
import Payments from '../pages/Payments'
import AddPayment  from '../pages/AddPayment';


Modal.setAppElement('#root');

class ProductCard extends Component {
    static contextType = ShopContext;

    constructor(props){
        super(props);
        this.state = {
            disabled: false,
            isModalOpen: false,
            curPage: "payments",
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.goToAddPayment = this.goToAddPayment.bind(this);
        this.goToPayments = this.goToPayments.bind(this);
        this.formattedPrice = this.formattedPrice.bind(this);
    }

    openModal() {
        this.setState({isModalOpen: true});
    }
    
    closeModal() {
        this.setState({isModalOpen: false});
    }

    goToAddPayment() {
        this.setState({ curPage: "addPayment"});
    }

    goToPayments() {
        this.setState({ curPage: "payments"});
    }

    formattedPrice(amount) {
        const formattedPrice = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return `${formattedPrice}원`;
    }

    handleClick(path, brand, info, price) {
        const { cartItems, handleAddToCart } = this.context;
        
        // 1. 장바구니에 추가
        handleAddToCart(path, brand, info, price);
        
        // 2. 버튼 비활성화
        this.setState({ disabled: true });
        console.log(cartItems);
    }

    render() {
        const { path, brand, info, price } = this.props;
        const { disabled, isModalOpen, curPage } = this.state;

        return (
            <div className="lg:h-[400px] w-full h-[320px] flex flex-col items-center justify-center rounded-2xl border border-gray-100 overflow-hidden">
                <img src={path} className="w-full h-1/2 lg:h-2/3 object-cover"/>
                <div className="w-full h-1/2 lg:h-1/3 px-4 py-4 flex flex-col gap-1">
                    <h3 className="font-bold text-base">{brand}</h3>
                    <p className="text-sm text-gray-500">{info}</p>
                    <p className="font-bold text-base">{this.formattedPrice(price)}</p>
                    <div className='flex flex-row gap-2'>
                    <button onClick={() => this.handleClick(path, brand, info, price)} className={`bg-black text-white text-xs p-1 w-11 rounded-xl ${disabled ? 'bg-gray-300 text-black font-bold cursor-not-allowed': ''}`} 
                        disabled={disabled ? "disabled" : ""}>
                        {disabled ? "담김!" : "담기"}
                    </button>
                    <button onClick={this.openModal} className={`bg-yellow-400 text-black text-xs text-center p-1 w-11 rounded-xl`}>구매</button>
                    </div>
                </div>

                {/* modal */}
                <Modal isOpen={isModalOpen} onRequestClose={this.closeModal} contentLabel='결제'>
                    {curPage === "payments" ? (
                        <Payments handleClose={this.closeModal} goToAddPayment={this.goToAddPayment}/>
                    ) : (
                        <AddPayment handleClose={this.closeModal} goToPayment={this.goToPayments}/>
                    )}
                </Modal>
            </div>
        )
    }
}

export default ProductCard;