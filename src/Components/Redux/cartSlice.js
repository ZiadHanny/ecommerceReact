import { createSlice } from "@reduxjs/toolkit";

const CartState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: CartState,
    reducers: {
        addTocart: (state, action) => {
            
            const exists = state.cart.find(item => item.id === action.payload.id);
            if (!exists) {
                state.cart.push(action.payload);
            }
        },
        removeTocart: (state, action) => {
            
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        }
    }
})

export const { addTocart, removeTocart } = cartSlice.actions;
export default cartSlice.reducer;
