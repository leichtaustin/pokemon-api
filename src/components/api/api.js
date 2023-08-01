import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonData = async (pokemon) => {
    const pokemonName = pokemon;
    const fetchURL = `${baseURL}${pokemonName}/`;
    
    //try catch statement for fetch function
    try {
        //returns a promise to resolve
        const response = await fetch(fetchURL);

        if(response.ok) {
            const json = await response.json();
            console.log(json);
            return json;
        }
    } catch (error) {
        console.log(error);
    }


}
