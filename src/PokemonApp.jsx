import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
	const { page, pokemons, isLoading } = useSelector((state) => state.pokemons);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPokemons());
	}, []);

	const add = () => {
		dispatch(getPokemons(page));
	};

	return (
		<>
			<h1>PokemonApi</h1>
			<br />

			<span>Pagina: {page}</span>

			{isLoading ? (
				<h2>Loading</h2>
			) : (
				<ListPokemon page={page} pokemons={pokemons} isLoading={isLoading} />
			)}

			<button disabled={isLoading} onClick={add}>
				next
			</button>
		</>
	);
};

const ListPokemon = ({ pokemons = [] }) => {
	return (
		<>
			<ul>
				{pokemons.map((item, index) => (
					<li key={index}>
						{/* <img src={item.url} alt={item.name} /> */}
						<h3>{item.name}</h3>
					</li>
				))}
			</ul>
		</>
	);
};
