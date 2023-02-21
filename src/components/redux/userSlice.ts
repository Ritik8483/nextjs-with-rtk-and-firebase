import { createSlice } from '@reduxjs/toolkit';
const initialState={
    userToken:"",
}
const userSlice = createSlice({
    name:'userReducer',
    initialState:initialState,
    reducers: {
        storeUserToken:(state,action)=>{
            state.userToken=action.payload
        }
    }
});
export const {storeUserToken}=userSlice.actions;
export default userSlice.reducer;
