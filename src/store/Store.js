import create from 'zustand';

const useProduct = create((set) => ({
  select: null,
  cart: [],
  setSelect: (product) => set({ select: product }),
  addCart: (product) => set((state) => ({
    cart: [...state.cart, product]
  })),
  clearCart: () => set({ cart: [] }),
  removeFromCart: (index) => set((state) => ({
    cart: state.cart.filter((_, i) => i !== index)
  }))
}));

export default useProduct;
