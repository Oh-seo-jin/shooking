// ProductCard.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

const setup = () => {
  const setCount = jest.fn();
  const props = {
    path: '/product1.png',
    name: '브랜드A',
    info: '편안하고 착용감이 좋은 신발',
    price: '35,000원',
    count: 0,
    setCount,
  };
  
  const utils = render(<ProductCard {...props} />);
  const addButton = screen.getByText(/담기/i);
  
  return {
    ...utils,
    addButton,
    setCount,
  };
};

describe('ProductCard Component', () => {
  test('상품카드 출력 확인', () => {
    setup();
    expect(screen.getByText(/브랜드A/i)).toBeInTheDocument();
    expect(screen.getByText(/편안하고 착용감이 좋은 신발/i)).toBeInTheDocument();
    expect(screen.getByText(/35,000원/i)).toBeInTheDocument();
  });

  test('담기 누르면 장바구니 개수 증가', () => {
    const { addButton, setCount } = setup();
    fireEvent.click(addButton);
    expect(setCount).toHaveBeenCalledWith(1);
  });
});
