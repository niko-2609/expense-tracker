import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/rootReducer";
import { User } from "@/lib/types/types";
const initialState:User = {
    user: null,
    loading: false,
    isAuthenticated: false,
    error: null
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true
            state.error = null
        },
        signInSuccess: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
            state.loading = false
            state.error = null
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
            state.user = null;
        },
        clearUserState: (state) => {
            state.user = null;
            state.error = null;
            state.loading = false;
            state.isAuthenticated = false;
        },
        signOutStart: (state) => {
            state.loading = true;
        },
        signOutSuccess: (state) => {
            state.loading = false;
            state.user = null;
            state.error = null;
            state.isAuthenticated = false;
        },
        signOutFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        }
});

export const { 
    signInStart,
    signInFailure,
    signInSuccess,
    clearUserState,
    signOutStart,
    signOutFailure,
    signOutSuccess,

} = userSlice.actions;
export const userReducer = userSlice.reducer;

// export const selectSettings = (state: RootState): Settings => state.settings;
// export const getUserId = (state:RootState): string | undefined => state?.settings?.id;
// export const selectName = (state: RootState): string  | undefined => state?.settings?.name;
// export const selectEmail = (state: RootState): string | undefined => state?.settings?.email;
// export const selectPhoto = (state: RootState): string  | undefined => state?.settings?.photo;
// export const selectLanguage = (state: RootState): string  | undefined => state?.settings?.language;
