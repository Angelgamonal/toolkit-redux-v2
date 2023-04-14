import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemon } from './pokemonSlice';

export const getPokemons = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(startLoadingPokemon());

		//TODO: peticion http clasico
		// const resp = await fetch(
		// 	`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page + 1}`
		// );
		// const data = await resp.json();

		const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page + 1}`);

		// console.log(data);

		dispatch(
			setPokemons({
				page: page + 1,
				pokemons: data.results,
			})
		);
	};
};
