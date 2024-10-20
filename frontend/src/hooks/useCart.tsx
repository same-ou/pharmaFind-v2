import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";
import { CartProductItem } from "@/types";

type CartStore = {
    cart: CartProductItem[];
    addToCart: (product: CartProductItem) => void;
    handleQuantityChange: (id: number, newQuantity: number) => void;
    handleDelete: (id: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
};

export const useCart = create<CartStore>()(
    persist(
    (set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    handleQuantityChange: (id, newQuantity) => set((state) => ({ cart: state.cart.map((product) => (product.id === id ? { ...product, quantity: newQuantity } : product) ) })),
    handleDelete: (id) => set((state) => ({ cart: state.cart.filter((product) => product.id !== id) })),
    removeFromCart: (productId) => set((state) => ({ cart: state.cart.filter((product) => product.id !== productId) })),
    clearCart: () => set({ cart: [] }),
    }),{
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage),
  } )
);