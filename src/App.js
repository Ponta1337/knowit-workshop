import React, { useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
import SearchForm from "./components/SearchForm";

export default function App() {
  // const [pokemon, setPokemon] = useState();
  // const [status, setStatus] = useState("idle");
  // const [error, setError] = useState();
  const [state, setState] = useState({
    status: "idle",
    pokemon: null,
    error: null,
  });

  const handleSubmit = async (e, query) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, status: "pending", error: null }));

    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then((res) => res.json())
      .then((pokemonData) =>
        setState((prevState) => ({ ...prevState, pokemon: pokemonData }))
      )
      .then(() =>
        setState((prevState) => ({ ...prevState, status: "resolved" }))
      )
      .catch((err) => {
        setState((prevState) => ({
          ...prevState,
          status: "rejected",
          error: new Error("Something went wrong!"),
        }));
      });
  };

  return (
    <div className="app-container">
      <h3>Pokemon stats!</h3>
      <SearchForm handleSubmit={handleSubmit} />
      <Pokemon state={state} />
    </div>
  );
}
