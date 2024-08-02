import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: null,
        email: null,
        password: null,
        firebaseDetails: null
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
        },
        addDetailsInFirebase: (state, action)=>{
            state.firebaseDetails = action.payload;
        }
    }

})

export const { addEmail, addName, addPassword, addDetailsInFirebase } = userSlice.actions;

export default userSlice.reducer;