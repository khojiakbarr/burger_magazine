import { create } from 'zustand';

const useProductStore = create((set, get) => ({
  products: [],
  categories: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('http://localhost:3001/foods');
      const data = await response.json();
      set({ products: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('http://localhost:3001/categories');
      const data = await response.json();
      set({ categories: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addProduct: async (product) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('http://localhost:3001/foods', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      set({
        products: [...get().products, data],
        loading: false
      });
      return data;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  updateProduct: async (id, product) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`http://localhost:3001/foods/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      set({
        products: get().products.map(p => p.id === id ? data : p),
        loading: false,
      });
      return data;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  deleteProduct: async (id) => {
    set({ loading: true, error: null });
    try {
      await fetch(`http://localhost:3001/foods/${id}`, {
        method: 'DELETE',
      });
      set({
        products: get().products.filter(p => p.id !== id),
        loading: false,
      });
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  getProductById: (id) => {
    return get().products.find(p => p.id === id);
  },

  getProductsByCategory: (category) => {
    return get().products.filter(p => p.category === category);
  },
}));

export default useProductStore;
