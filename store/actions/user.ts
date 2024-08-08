import { Dispatch, createAsyncThunk, AsyncThunkAction } from '@reduxjs/toolkit';

import {
    signInStart,
    signInFailure,
    signInSuccess,
    signOutStart,
    signOutSuccess,
    signOutFailure,
    clearUserState
} from '@/store/features/user';
import { RootState } from '../rootReducer';
import { login } from '@/actions/login';
import { logout } from '@/actions/logout';
import { getSession } from '@/utils/auth';



// Login
export const signInUserAction = createAsyncThunk<void, any, { dispatch: Dispatch, state: RootState }>(
    "user/signInUserAction",
    async (values, { dispatch }) => {
        dispatch(signInStart());

        console.log("******DATA******");
        try {
            login(values).then((data) => {
                if (data?.error) {
                    dispatch(signInFailure(data?.error))
                    throw new Error(data?.error);
                }
                const session = getSession();
                console.log("*****SUCCESS******", session)
                dispatch(signInSuccess(session));
                if (!session) {
                    dispatch(signInFailure("Cannot fetch user details"))
                    throw new Error("Cannot fetch user details");
                }
            })

        } catch (error: any) {
            dispatch(signInFailure(error.message || "An unknown error occurred"));
        }
    }
);




// LOGOUT
export const signOutUserAction = createAsyncThunk<void, void, { dispatch: Dispatch }>("user/signOutUser", async (_, { dispatch }) => {
    try {
        dispatch(signOutStart())
        logout().then(() => {
            dispatch(signOutSuccess())
        })
    } catch (error) {
        dispatch(signOutFailure(error));
        console.log(error)
    }
});


// export const googleSignInAction = createAsyncThunk<void, { dispatch: Dispatch }>("user/googleSignIn", async ({ dispatch }) => {
//     try {
//         dispatch(signInStart());
//         const result = await googleSignIn();
//         dispatch(signInSuccess(result));
//     }
//     catch (error) {
//         dispatch(signInFailure(error));
//         console.log(error);
//     }
// });


// export const updateUserAction = createAsyncThunk<void, UpdateUserPayload ,{dispatch: Dispatch}>("user/updateUser", async({formData, userId }, {dispatch}) => {
//     try{
//         dispatch(updateUserStart());
//         const result = await updateUser({userId, formData});
//         if (result.success === false) {
//             dispatch(updateUserFailure(result));
//             return;
//         }
//         dispatch(updateUserSuccess(result))
//     } catch (error) {
//         dispatch(updateUserFailure(error));
//         console.log(error)
//     }
// });


// export const deleteUserAction = createAsyncThunk<void, any ,{dispatch: Dispatch}>("user/deleteUser", async(userId , {dispatch}) => {
//     try{
//         dispatch(deleteUserStart());
//         const result = await deleteUser(userId);
//         if (result.success === false) {
//             dispatch(deleteUserFailure(result));
//             return;
//         }
//         dispatch(deleteUserSuccess(result))
//     } catch (error) {
//         dispatch(deleteUserFailure(error));
//         console.log(error)
//     }
// });


