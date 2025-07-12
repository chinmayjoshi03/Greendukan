import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalAmount: 0,
        totalItems: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;

            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }

            state.totalAmount += action.payload.price;
            state.totalItems += 1;
        },
        removeFromCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                state.totalAmount -= existingItem.price * existingItem.quantity;
                state.totalItems -= existingItem.quantity;
                state.items = state.items.filter(item => item.id !== action.payload.id);
            }
        },
        updateQuantity: (state, action) => {
            const {id, quantity} = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem && quantity > 0) {
                const difference = (quantity - existingItem.quantity) * existingItem.price;
                state.totalAmount += difference;
                state.totalItems += quantity - existingItem.quantity;
                existingItem.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
            state.totalItems = 0;
        }
    }

});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;