import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectTeamList } from './teamListSlice';

export const TeamList = () => {
    const pokemonTeam = useSelector(selectTeamList);

    useEffect(() => {
        console.log(pokemonTeam);
    }, [selectTeamList])

    return (
        <div className='pokemonTeam'>
            <h2>My Team: </h2>
            {pokemonTeam.map((member) => {
                return (
                <div>
                    <h3>Name: {member.name}</h3>
                    <p>Weight: {member.weight}</p>
                </div>
                );
            })}
        </div>
    )
}