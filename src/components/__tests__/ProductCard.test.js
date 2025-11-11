import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductCard';

const mockProduct = {
  id: '1',
  name: 'Test Burger',
  description: 'Delicious test burger',
  price: '25000',
  category: 'Burger',
  image: 'https://example.com/burger.jpg',
};

describe('ProductCard', () => {
  it('should render product information', () => {
    const onViewDetails = jest.fn();
    render(<ProductCard product={mockProduct} onViewDetails={onViewDetails} />);

    expect(screen.getByText('Test Burger')).toBeInTheDocument();
    expect(screen.getByText('Delicious test burger')).toBeInTheDocument();
    expect(screen.getByText(/25,000 so'm/)).toBeInTheDocument();
  });

  it('should call onViewDetails when view button is clicked', () => {
    const onViewDetails = jest.fn();
    render(<ProductCard product={mockProduct} onViewDetails={onViewDetails} />);

    const viewButton = screen.getAllByRole('button')[1]; // Second button is the view button
    fireEvent.click(viewButton);

    expect(onViewDetails).toHaveBeenCalledWith(mockProduct);
  });

  it('should display product category badge', () => {
    const onViewDetails = jest.fn();
    render(<ProductCard product={mockProduct} onViewDetails={onViewDetails} />);

    expect(screen.getByText('Burger')).toBeInTheDocument();
  });
});
