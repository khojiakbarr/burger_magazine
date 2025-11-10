import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

const MockNavbar = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

describe('Navbar', () => {
  it('should render navigation links', () => {
    render(<MockNavbar />);

    expect(screen.getByText('Bosh sahifa')).toBeInTheDocument();
    expect(screen.getByText('Mahsulotlar')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Statistika')).toBeInTheDocument();
  });

  it('should render cart button', () => {
    render(<MockNavbar />);

    const cartButtons = screen.getAllByRole('button');
    expect(cartButtons.length).toBeGreaterThan(0);
  });

  it('should render logo', () => {
    render(<MockNavbar />);

    expect(screen.getByText('🍔')).toBeInTheDocument();
  });
});
