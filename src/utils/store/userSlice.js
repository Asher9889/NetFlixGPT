import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    name: null,
    email: null,
    password: null,
    firebaseDetails: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    // : {
    //     name: null,
    //     email: null,
    //     password: null,
    //     firebaseDetails: null
    // },

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
        },
        removeUser: (state,action)=>{
            Object.assign(state, initialState);
        }
    }

})

export const { addEmail, addName, addPassword, addDetailsInFirebase, removeUser } = userSlice.actions;

export default userSlice.reducer;