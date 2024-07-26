import { Component } from "react";
import ProductCard from '../components/ProductCard';


class Products extends Component{
  constructor(props) {
    super(props);
    this.state = {n: 2, count: 0};
    this.setCount = this.setCount.bind(this);
  }
  setCount(newCount){
    this.setState({count: newCount});
  }

  render() {
    return (
      <div className='w-screen h-screen'>
      {/* header */}
      <div className='bg-black w-screen h-16 flex flex-row justify-end items-center px-6 lg:px-12'>
        <p className='text-white mr-1'>장바구니</p>
        <p className='bg-white text-black font-bold rounded-full w-6 h-6 text-center'>{this.state.count}</p>
      </div>
      {/* main */}
      <div className='p-6 lg:px-60'>
        <h1 className='font-bold text-2xl mt-4 mb-1'>신발 상품 목록</h1>
        <p className='text-base mb-6'>현재 {this.state.n}개의 상품이 있습니다.</p>
        <div className='grid grid-cols-2 gap-4'>
          <ProductCard path="https://oh-seo-jin.github.io/shooking/img/product1.png" name="브랜드A" info="편안하고 착용감이 좋은 신발" price="35,000원" count={this.state.count} setCount={this.setCount}/>
          <ProductCard path="https://oh-seo-jin.github.io/shooking/img/product2.png" name="브랜드A" info="힙한 컬러가 매력적인 신발" price="25,000원" count={this.state.count} setCount={this.setCount}/>
        </div>
      </div>
    </div>
    )
  }
}

export default Products;