// store.js

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import exampleReducer from './exampleSlice';
import userReducer from './userSlice';


// Combinez les reducers de chaque slice
const rootReducer = combineReducers({
    exampleX: exampleReducer,
    user: userReducer,
    // Ajoutez d'autres reducers si nécessaire
});

// Configurez le store avec le reducer combiné
const store = configureStore({
    reducer: rootReducer,
});

export default store;