import React from 'react';
import App from '../../App'
import { render, screen } from '@testing-library/react';
import { getPokemonData } from '../api/api';

test('sanity check', () => {
    expect(true).toBe(true);
});

it('returns the weight of the pokemon', async () => {
    const pokemonData = await getPokemonData('charmander');
    const weight = pokemonData.weight;
    expect(weight).toEqual(85);
});

 it('renders initial weight value', () => {
     render(<App />);
     expect(screen.getByText('Weight:')).toBeInTheDocument();
   });