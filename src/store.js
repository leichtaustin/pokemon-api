import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from './components/searchTerm/searchTermSlice.js';
import queryPokemonReducer from './components/queryPokemon/queryPokemonSlice.js';
import teamListReaducer from './components/teamList/teamListSlice.js';



export default configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        queryPokemon: queryPokemonReducer,
        teamList: teamListReaducer
    }
});