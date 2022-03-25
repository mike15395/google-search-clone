import { configureStore } from "@reduxjs/toolkit";

//configure store has both create store and combine reducer
import userReducer from '../features/UserSlice';


export const store = configureStore({
    reducer: {
        user: userReducer
    }

})