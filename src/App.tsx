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
	const pokemonIndex = useState(pokemonList);
	const [index, setIndex] = useState(0);

	console.log(pokemonIndex[0]);

	function handleClickPrev() {
		if (index > 0) {
			setIndex(index - 1);
		}
	}

	function handleClickNext() {
		if (index < pokemonList.length - 1) {
			setIndex(index + 1);
		}
	}

	return (
		<>
			<section>
				{<PokemonCard pokemon={pokemonList[index]} />}
				<div className="btn-container">
					<button className="btn" type="button" onClick={handleClickPrev}>
						Précédent
					</button>

					<button className="btn" type="button" onClick={handleClickNext}>
						Suivant
					</button>
				</div>
			</section>
		</>
	);
}

export default App;
