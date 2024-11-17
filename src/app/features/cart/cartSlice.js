import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Array of cart items
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        increment: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else if (item) {
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        },
    },
});

export const { addItem, removeItem, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
