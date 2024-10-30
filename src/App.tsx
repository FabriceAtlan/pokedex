import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	return (
		<>
			<nav>
				{pokemonList.map((poke) => {
					return (
						<button
							key={poke.name}
							type="button"
							onClick={() => {
								setPokemonIndex(pokemonList.indexOf(poke));
							}}
						>
							{poke.name}
						</button>
					);
				})}
			</nav>
			<section>{<PokemonCard pokemon={pokemonList[pokemonIndex]} />}</section>
		</>
	);
}

export default App;
