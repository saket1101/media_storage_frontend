import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo:JSON.parse(localStorage.getItem("userInfo") || "{}"),
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserInfo:(state,action) =>{
            state.userInfo = action.payload
            localStorage.setItem("userInfo",JSON.stringify(action.payload))
        },
        removeUserInfo: (state,action) =>{
           state.userInfo ={}
           localStorage.removeItem("userInfo")
        }
    }
})

export const {setUserInfo,removeUserInfo } = userSlice.actions;

export default userSlice.reducer;
