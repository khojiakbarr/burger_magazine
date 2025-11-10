import { renderHook, act } from '@testing-library/react';
import useCartStore from '../useCartStore';

describe('useCartStore', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useCartStore());
    act(() => {
      result.current.clearCart();
    });
  });

  it('should add item to cart', () => {
    const { result } = renderHook(() => useCartStore());

    const product = {
      id: '1',
      name: 'Test Burger',
      price: '25000',
      category: 'Burger',
      image: 'test.jpg',
    };

    act(() => {
      result.current.addItem(product);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].quantity).toBe(1);
  });

  it('should increase quantity when adding same item', () => {
    const { result } = renderHook(() => useCartStore());

    const product = {
      id: '1',
      name: 'Test Burger',
      price: '25000',
    };

    act(() => {
      result.current.addItem(product);
      result.current.addItem(product);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].quantity).toBe(2);
  });

  it('should remove item from cart', () => {
    const { result } = renderHook(() => useCartStore());

    const product = {
      id: '1',
      name: 'Test Burger',
      price: '25000',
    };

    act(() => {
      result.current.addItem(product);
      result.current.removeItem('1');
    });

    expect(result.current.items).toHaveLength(0);
  });

  it('should calculate total price correctly', () => {
    const { result } = renderHook(() => useCartStore());

    const product1 = { id: '1', name: 'Burger', price: '25000' };
    const product2 = { id: '2', name: 'Lavash', price: '20000' };

    act(() => {
      result.current.addItem(product1);
      result.current.addItem(product2);
    });

    expect(result.current.getTotalPrice()).toBe(45000);
  });

  it('should calculate total items correctly', () => {
    const { result } = renderHook(() => useCartStore());

    const product = { id: '1', name: 'Burger', price: '25000' };

    act(() => {
      result.current.addItem(product);
      result.current.addItem(product);
      result.current.addItem(product);
    });

    expect(result.current.getTotalItems()).toBe(3);
  });

  it('should clear cart', () => {
    const { result } = renderHook(() => useCartStore());

    const product = { id: '1', name: 'Burger', price: '25000' };

    act(() => {
      result.current.addItem(product);
      result.current.clearCart();
    });

    expect(result.current.items).toHaveLength(0);
  });
});
