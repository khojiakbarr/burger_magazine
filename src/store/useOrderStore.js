import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useOrderStore = create(
  persist(
    (set, get) => ({
      orders: [],

      addOrder: (order) => {
        const newOrder = {
          id: Date.now().toString(),
          ...order,
          status: 'pending',
          createdAt: new Date().toISOString(),
        };
        set({ orders: [...get().orders, newOrder] });
        return newOrder;
      },

      updateOrderStatus: (orderId, status) => {
        set({
          orders: get().orders.map(order =>
            order.id === orderId ? { ...order, status } : order
          ),
        });
      },

      getOrderById: (orderId) => {
        return get().orders.find(order => order.id === orderId);
      },

      getAllOrders: () => {
        return get().orders;
      },

      getOrderStats: () => {
        const orders = get().orders;
        return {
          total: orders.length,
          pending: orders.filter(o => o.status === 'pending').length,
          completed: orders.filter(o => o.status === 'completed').length,
          totalRevenue: orders
            .filter(o => o.status === 'completed')
            .reduce((sum, order) => sum + order.total, 0),
        };
      },
    }),
    {
      name: 'order-storage',
    }
  )
);

export default useOrderStore;
