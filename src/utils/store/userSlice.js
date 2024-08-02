import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: null,
        email: null,
        password: null,
    },

    reducers: {
        addEmail: (state, action)=>{
            state.email = action.payload; 
        },
        addName: (state, action)=>{
            state.name = action.payload;
        },
        addPassword: (state, action)=>{
            state.password = action.payload
        }
    }

})

export const { addEmail, addName, addPassword } = userSlice.actions;

export default userSlice.reducer;