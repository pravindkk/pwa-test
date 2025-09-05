import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/auth.slice'

const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export default store

export type IRootState = ReturnType<typeof store.getState>