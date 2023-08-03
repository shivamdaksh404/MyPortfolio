import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from './Slices'

export const store = configureStore({
    reducer:{
        navigation : navigationReducer,
    },

})