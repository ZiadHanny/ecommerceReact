import { createSlice } from "@reduxjs/toolkit";




const  CartState = {
    cart :[]
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState: CartState,
    reducers :{
        addTocart:(state ,action) =>{
            state.cart.push(action.payload)
        },
        removeTocart:(state, action) =>{
            state.cart.splice( action.payload)
            

        }
    }
})