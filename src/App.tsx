import { useState, useEffect } from "react";

import "./App.css";

import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

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

	const start = useEffect(() => {
		alert("hello pokemon trainer :)");
	}, []);

	function handleClickPrev() {
		if (pokemonIndex > 0) {
			setPokemonIndex(pokemonIndex - 1);
		}
	}

	function handleClickNext() {
		if (pokemonIndex < pokemonList.length - 1) {
			setPokemonIndex(pokemonIndex + 1);
		}
	}

	return (
		<>
			<section className="container">
				<NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />

				<section className="card">
					{<PokemonCard pokemon={pokemonList[pokemonIndex]} />}
					<div className="btn-container">
						<button
							className="btn"
							style={{ display: pokemonIndex > 0 ? "block" : "none" }}
							type="button"
							onClick={handleClickPrev}
						>
							Précédent
						</button>

						<button
							className="btn"
							style={{
								display:
									pokemonIndex < pokemonList.length - 1 ? "block" : "none",
							}}
							type="button"
							onClick={handleClickNext}
						>
							Suivant
						</button>
					</div>
				</section>
			</section>
		</>
	);
}

export default App;
