// import  { configureStore } from '@reduxjs/toolkit';
// import TodoReducer from '../Feature/TodoSlice'



// export const store = configureStore({
//     reducer: TodoReducer
    
// })

import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from '../Feature/TodoSlice';
import { saveState, loadState } from './localStorage';

// Load the state from local storage if available
const preloadedState = loadState();

// Configure the store with the reducer and preloaded state
export const store = configureStore({
    reducer: TodoReducer,
    preloadedState, // Initialize the state with data from local storage
});

// Subscribe to store changes and save the state to local storage
store.subscribe(() => {
    saveState(store.getState());
});
