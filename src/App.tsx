import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
];

function App() {
	return (
		<>
			<section>{<PokemonCard pokemon={pokemonList[0]} />}</section>
		</>
	);
}

export default App;
