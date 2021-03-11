const initialState = {
	pokemons: [],
	pokemonDetail: null,
	count: 0,
	next: null,
	previous: null,
	loading: false
};

const PokemonReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_LOADING":
			return { ...state, loading: true };
		case "STOP_LOADING":
			return { ...state, loading: false };
		case "INITIALIZE_POKEMONS":
			const data = action.payload;
			return { ...state, pokemons: data?.results, count: data?.count, next: data?.next, previous: data?.previous };
		case "INITIALIZE_POKEMONS_DETAIL":
			const detail = action?.payload;
			return { ...state, pokemonDetail: detail };
		default:
			return { ...state };
	}
}

export default PokemonReducer;
