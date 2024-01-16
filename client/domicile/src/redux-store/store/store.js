import { configureStore } from "@reduxjs/toolkit";
import mobileSlice from "../appSlice/LandingPageSlice/mobileSlice/mobileSlice";


const mobileReducer={
    mobile:mobileSlice
}

const store = configureStore({
    reducer:mobileReducer
})

export default store