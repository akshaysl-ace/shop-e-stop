import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const cartState = {
    cartItems: [],
    itemsPrice: 0,
    shippingPrice: 0,
    tax: 0,
    totalPrice: 0
}

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : cartState;

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(i => i._id === item._id);

            if (existingItem) {
                state.cartItems = state.cartItems.map((i) => i._id === existingItem._id ? item : i);
            } else {
                state.cartItems = [...state.cartItems, item];
            }
            updateCart(state);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(i => i._id !== action.payload);
            return updateCart(state);
        }
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;