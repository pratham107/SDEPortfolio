import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./feature/ThemeSlice"


const store=configureStore({
    reducer:{
     theme: themeReducer,
    }
})


export default store;