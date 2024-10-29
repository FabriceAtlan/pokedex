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
	const pokemonIndex = useState(0);
	const index = pokemonIndex[0];
	const setIndex = pokemonIndex[1];

	function handleClickPrev() {
		if (index > 0) {
			setIndex(index - 1);
		}
	}

	function handleClickNext() {
		if (pokemonIndex[0] < pokemonList.length - 1) {
			setIndex(index + 1);
		}
	}

	return (
		<>
			<section>
				{<PokemonCard pokemon={pokemonList[index]} />}
				<div className="btn-container">
					<button
						className="btn"
						style={{ display: index > 0 ? "block" : "none" }}
						type="button"
						onClick={handleClickPrev}
					>
						Précédent
					</button>

					<button
						className="btn"
						style={{
							display: index < pokemonList.length - 1 ? "block" : "none",
						}}
						type="button"
						onClick={handleClickNext}
					>
						Suivant
					</button>
				</div>
			</section>
		</>
	);
}

export default App;
