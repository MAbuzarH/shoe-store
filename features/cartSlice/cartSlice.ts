import { CartItems } from "@/app/components";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/type";

export interface CartState {
  cartItems: [{ item: Product; quantity: number }];
}

const initialState: CartState = {
  cartItems: [
    {
      item: {
        title: "",
        category: "",
        description: "",
        orignalPrice: 0,
        discountedPrice: 0,
        size: [0],
        mainImage: {
          asset: {
            url: "",
          },
        },
        subImages: [
          {
            asset: {
              url: "",
            },
          },
        ],
      },
      quantity: 0,
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      // check value
      const itemIndex = state.cartItems.findIndex(
        (item) => item.item.title === actions.payload.title
      );

      if (itemIndex !== -1) {
        // If the item already exists in the cart, update its quantity
        state.cartItems[itemIndex].quantity += 1;
      } else {
        // If the item doesn't exist, add it to the cart with a quantity of 1
        state.cartItems.push({ item: actions.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.item.title === action.payload.title
      );
    
      if (itemIndex !== -1) {
        // If the item exists in the cart and its quantity is greater than 1, decrease its quantity by 1
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;
        } else {
          // If the item's quantity is 1 or less, remove it from the cart
          state.cartItems.splice(itemIndex, 1);
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
