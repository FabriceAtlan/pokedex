import { useState } from "react";
import "../App.css";

interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
	// const pokemonIndex = useState(0);
	// const index = pokemonIndex[0];
	// const setIndex = pokemonIndex[1];

	return (
		<nav>
			{pokemonList.map((poke) => {
				return (
					<>
						<button
							key={poke.name}
							type="button"
							onClick={() => {
								setPokemonIndex(pokemonList.indexOf(poke));
							}}
						>
							{poke.name}
						</button>
					</>
				);
			})}
		</nav>
	);
}
export default NavBar;
