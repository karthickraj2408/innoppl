
import { createSlice } from "@reduxjs/toolkit"
 const loginSlice = createSlice({
    name:'auth',
    initialState :{
        authenticate : false,
        user: null,
        token : null,
        profile: {
            username: '',
            name: "",    
            email: '',       
            mobile: '',     
            address: '',    
            dob: '',         
            zipCode: '',     
            gender: '',     
        },
    },
    reducers :{
        login :(state,action) =>{
            state.authenticate = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.profile = action.payload.profile;
        },
        logout :(state) =>{
            state.authenticate = false;
            state.user = null;
            state.token = null;
            state.profile = {
                username: '',
                name:'',
                email: '',
                mobile: '',
                address: '',
                dob: '',
                zipCode: '',
                gender: '',
            };
        },
        updateProfile: (state, action) => {
            
            const newProfile = { ...state.profile, ...action.payload };
            localStorage.setItem("profile", JSON.stringify(state.profile));
            return { ...state, profile: newProfile };
        },
        
    }
 })
 export const {login, logout,updateProfile} = loginSlice.actions;
 export default loginSlice.reducer