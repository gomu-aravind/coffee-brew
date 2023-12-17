import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount:0
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      // console.log(newItem)
      const existingItem = state.items.find((item) => (item.id === newItem.id));
      state.totalQuantity++;
      state.totalAmount=state.totalAmount+newItem.price
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          image:newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title:newItem.title
        });
      }else{
        existingItem.quantity++;
        existingItem.totalPrice=existingItem.totalPrice+newItem.price
        
      }
    },
    removeItemFromCart(state,action) {
        const id=action.payload
        const existingItem=state.items.find((item)=>item.id===id)
        // console.log(existingItem)
        state.totalQuantity--;
        state.totalAmount=state.totalAmount-existingItem.price

        if(existingItem.quantity===1){
            state.items=state.items.filter(item=>item.id!==id)
        }else{
            existingItem.quantity--;
            existingItem.totalPrice=existingItem.totalPrice-existingItem.price

        }
    },
    clearCart(state){
      state.items=[];
      state.totalQuantity=0;
      state.totalAmount=0;
    },
    deleteItemsInCart(state,action){
      const id=action.payload;
      const existingItem=state.items.find(item=>item.id===id)
      state.totalQuantity=state.totalQuantity-existingItem.quantity
      state.totalAmount=state.totalAmount-existingItem.totalPrice
      state.items=state.items.filter(item=>item.id!==id)
    }
  },
});

export const cartActions= cartSlice.actions

export default cartSlice