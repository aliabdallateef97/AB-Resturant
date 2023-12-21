import { createSlice } from "@reduxjs/toolkit";

interface AuthSlice{
    token:string | null,
    userId:string | null,
    isLoggedIn:boolean
}

const initialState:AuthSlice = {
  token: null,
  userId: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state,action){
        state.token =action.payload.idToken
        state.userId=action.payload.localId
        state.isLoggedIn=true
    },
    logout(state){
        state.token=''
        state.userId=''
        state.isLoggedIn=false
    }
  },
});

export const { login,logout } = authSlice.actions;
export default authSlice.reducer;
