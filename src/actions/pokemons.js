import { fetchPokemons } from '../api/pokemons';
import { toastr } from "react-redux-toastr";
import { fetchPokemonDetails } from '../api/pokemonDetail';

export function startLoading() {
	return {
		type: 'START_LOADING'
	}
};

export function StopLoading() {
	return {
		type: 'STOP_LOADING'
	}
};

export function InitializePokemons(payload) {
	return {
		type: 'INITIALIZE_POKEMONS',
		payload
	}
};

export function InitializePokemonDetail(payload) {
	return {
		type: 'INITIALIZE_POKEMONS_DETAIL',
		payload
	}
};

export const getPokemons = (data) => async dispatch => {
	try {
		dispatch(startLoading());
		const response = await fetchPokemons(data);
		if (Object.keys(response).length) {
			dispatch(InitializePokemons(response));
		}
		dispatch(StopLoading());
	} catch (e) {
		return [];
	}
};

export const getPokemonsDetail = (data) => async dispatch => {
	const path = 'https://pokeapi.co/api/v2/pokemon/' + data
	try {
		dispatch(startLoading());
		const response = await fetchPokemonDetails(path);
		if (Object.keys(response).length) {
			dispatch(InitializePokemonDetail(response));
		}
		dispatch(StopLoading());
	} catch (e) {
		return [];
	}
};

