import React from "react";

export default function Pokemon({ state }) {
  console.log(state);

  if (state.status === "rejected") {
    return <p>{state.error.message}</p>;
  }

  if (state.status === "idle") {
    return <p>Search for a pokemon!!</p>;
  }

  if (state.status === "pending") {
    return <p>Loading...</p>;
  }

  if (state.status === "resolved") {
    return (
      <div className="pokemon-container">
        <h4>{state.pokemon.name}</h4>
        <div className="image-wrapper">
          <img src={state.pokemon.sprites.front_default} alt="pikachu" />
        </div>
        <ul>
          <li>Height: {state.pokemon.height}</li>
          <li>Weight: {state.pokemon.weight}</li>
          <h5>Abilities</h5>
          {state.pokemon.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
