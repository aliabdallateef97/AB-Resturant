import { RootState } from "@/core/redux/store";

export const cart = (state:RootState) => state.cart;
export const items = (state:RootState) => state.cart.items;
export const totalQuantity = (state:RootState) => state.cart.totalQuantity;
export const totalPrice = (state:RootState) => state.cart.totalPrice;
export const showCart = (state:RootState) => state.cart.showCart;
export const changed = (state:RootState) => state.cart.changed;