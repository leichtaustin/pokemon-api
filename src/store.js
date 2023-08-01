import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from './components/searchTerm/searchTermSlice.js';



export default configureStore({
    reducer: {
        searchTerm: searchTermReducer
    }
});