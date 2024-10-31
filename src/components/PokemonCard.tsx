interface PokemonProps {
	name: string;
	imgSrc?: string;
}

interface PropsP {
	pokemon: PokemonProps;
}

function isPikachu(pPokemon: string) {
	alert(pPokemon);
}

function PokemonCard(propsPokemon: PropsP) {
	propsPokemon.pokemon.name === "pikachu" && alert("pika pikachu !!!");

	return (
		<figure>
			{propsPokemon.pokemon.imgSrc ? (
				<img
					src={propsPokemon.pokemon.imgSrc}
					alt={propsPokemon.pokemon.name}
				/>
			) : (
				<p>???</p>
			)}
			<figcaption>{propsPokemon.pokemon.name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
