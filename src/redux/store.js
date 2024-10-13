import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/cartSlice';
import CategorySlice from './slices/categorySlice';
import searchSlice from './slices/searchSlice';

const store = configureStore({
    reducer: {
        cart: CartSlice,
        category: CategorySlice,
        search: searchSlice,
    }
})
export default store