import { createSlice } from "@reduxjs/toolkit";
import { AuthContextType } from "../../types/User";

const initialAuth: AuthContextType = {
    user: undefined,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuth,
    reducers: {
        login: (state) => {
            state.user = {
                    id: 12,
                    email: 'hello',
                    username: 'hello',
                    name: 'hello'
                }
            state.isAuthenticated = true
        },
        signup: (state) => {
            state.user = {
                id: 12,
                email: 'hello',
                username: 'hello',
                name: 'hello'
            }
        state.isAuthenticated = true
        }
    }
})

export const { login, signup } = authSlice.actions
export default authSlice.reducer