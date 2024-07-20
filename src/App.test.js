import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('헤더: 장바구니, 개수 출력', () => {
    render(<App />);
    const cartText = screen.getByText(/장바구니/i);
    const cartCount = screen.getByText(/0/);

    expect(cartText).toBeInTheDocument();
    expect(cartCount).toBeInTheDocument();
  });

  test('메인: 상품 목록 설명 확인', () =>{
    render(<App/>);
    const mainHeader = screen.getByText(/신발 상품 목록/i);
    const productCount = screen.getByText(/현재 2개의 상품이 있습니다./i);

    expect(mainHeader).toBeInTheDocument();
    expect(productCount).toBeInTheDocument();
  });
});