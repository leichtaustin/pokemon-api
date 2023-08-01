import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectQueryPokemon } from "./queryPokemonSlice";

export const QueryPokemon = () => {
    const dispatch = useDispatch();
    const resultPokemon = useSelector(selectQueryPokemon);

    const { isLoading } = useSelector((state) => state.queryPokemon);

    if (isLoading) {
        return <p>Is Loading</p>
    }

    return (
        <div className="queryPokemon">
            <p>Name: {resultPokemon.name}</p>
            <p>Weight: {resultPokemon.weight}</p>
            <button type="button">Add Pokemon to Team</button>
        </div>
    )

};