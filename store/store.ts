'use client'
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import storage from './storage';

// Config used for persisting store data
const persistConfig = {
    key: "root",
    storage: storage,
    version: 1
}

// Create a persistedReducer, reducer that is persisted using redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Configure a usual redux store
// Instead of single reducers, a reducer combining all individual reducers is passed.
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
  })



// Export the persisted store
export const persistor = persistStore(store);


export type AppDispatch = typeof store.dispatch