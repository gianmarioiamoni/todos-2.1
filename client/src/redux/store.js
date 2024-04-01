 // store.js - redux is used to make globally available user information 

import { combineReducers, configureStore } from '@reduxjs/toolkit';
// redux-persist allows to maintain the data after refresh of the pages
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
    key: "root", // key inside the Local Storage of the browser
    version: 1,
    storage // save data inside the Local Storage of the browser
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

import userReducer from "./user/userSlice"

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false // to prevent errors
    })
});

export const persistor = persistStore(store);