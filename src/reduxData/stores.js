import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "./AuthSlice"


const stores = configureStore({
    reducer: {
        authInfo: AuthSlice
    }
})
export default stores