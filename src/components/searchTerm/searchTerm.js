import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchTerm, updateSearchTerm } from './searchTermSlice';
import { fetchPokemonData } from '../queryPokemon/queryPokemonSlice';

export const SearchTerm = () => {
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const onSearchTermChangeHandler = (e) => {
        e.preventDefault();
        const userInput = e.target.value
        dispatch(updateSearchTerm(userInput));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`searchTerm is ${searchTerm}`)
        dispatch(fetchPokemonData(searchTerm));
        console.log('handle Submit ran')
    }

    return (
        <div id='search-container'>
            <form onSubmit={handleSubmit}>
                <label for='pokeSearch'>Pokemon to Search: </label>
                <input type='text' id='pokeSearch' value={searchTerm} onChange={onSearchTermChangeHandler}/>
                <button type='submit'>Fetch Pokemon Data from query</button>
            </form>
            {/* {searchTerm.length > 0 && (
                <button
                    type='button'
                    id='search-clear-button'
                    onClick={onClearSearchTermHandler}
                >
                    Clear Search
                </button>
            )} */}
            <p>{searchTerm}</p>
        </div>
    )
}