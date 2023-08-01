import logo from './logo.svg';
import './App.css';
import { getPokemonData } from './components/api/api';
import React, {useState} from 'react';

import { SearchTerm } from './components/searchTerm/searchTerm';
import { QueryPokemon } from './components/queryPokemon/queryPokemon';
import { TeamList } from './components/teamList/teamList';

function App() {
  
  const [currentPokemon, setCurrentPokemon] = useState({})
  const [pokemonQuery, setPokemonQuery] = useState('');

  const fetchPokemonData = async (query) => {
    const pokemon = await getPokemonData(query);

    setCurrentPokemon(pokemon);
    console.log(`pokemon value is ${pokemon.stats[1]}`)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pokemonSearch = document.getElementById('pokeSearch').value.toLowerCase();
    console.log(pokemonSearch);
    //setPokemonQuery(pokemonSearch);
    fetchPokemonData(pokemonSearch);

  }
  
  
  
  return (
    <div className="App">
      <SearchTerm />
      <QueryPokemon />
      <TeamList />
      {/* <form onSubmit={handleSubmit}>
        <label for='pokeSearch'>Pokemon to Search: </label>
        <input type='text' id='pokeSearch' />
        <button type='submit'>Fetch Pokemon Data from query</button>
      </form>
      <button onClick={fetchPokemonData}>Get Pokemon Data</button>
      <div className='PokemonData'>
        <p>Pokemon: {currentPokemon.name}</p>
        {/* <p>Moves: {currentPokemon.stats.base_stat}</p> 
      </div> */}
    </div>
  );
}

export default App;
