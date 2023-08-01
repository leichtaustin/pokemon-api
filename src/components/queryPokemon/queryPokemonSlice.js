import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { selectSearchTerm } from "../searchTerm/searchTermSlice";


//async thunk for api call
export const fetchPokemonData = createAsyncThunk(
    'queryPokemon/getQueryPokemon',
    async (userInput) => {
        const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
        const query = userInput;
        console.log(query);
        const response = await fetch(`${baseURL}${query}/`)
        const json = await response.json();
        console.log('fetch pokemon ran')
        return json;
    }
);

//creation of slice

export const queryPokemonSlice = createSlice({
    name: 'queryPokemon',
    initialState: {
        pokemon: {name: 'no name', weight: 5},
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [fetchPokemonData.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchPokemonData.fulfilled]: (state, action) => {
            state.pokemon = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchPokemonData.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

//selector creation
export const selectQueryPokemon = (state) => state.queryPokemon.pokemon;

//action and reducer exports (currently no actions to export)
export default queryPokemonSlice.reducer;