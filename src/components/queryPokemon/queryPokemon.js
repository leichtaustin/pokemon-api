import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectQueryPokemon } from "./queryPokemonSlice";
import { addTeamMember } from "../teamList/teamListSlice";

export const QueryPokemon = () => {
    const dispatch = useDispatch();
    const resultPokemon = useSelector(selectQueryPokemon);

    const handleAddTeamMember = (pokemon) => {
        console.log(`handle add team member: ${pokemon.name}`);
        dispatch(addTeamMember(pokemon));
    }

    const { isLoading } = useSelector((state) => state.queryPokemon);

    if (isLoading) {
        return <p>Is Loading</p>
    }

    return (
        <div className="queryPokemon">
            <p>Name: {resultPokemon.name}</p>
            <p>Weight: {resultPokemon.weight}</p>
            <button type="button" onClick={() => handleAddTeamMember(resultPokemon)}>Add Pokemon to Team</button>
        </div>
    )

};