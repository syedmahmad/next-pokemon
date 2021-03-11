import serviceCalls from "../services/index.js";

export const fetchPokemonDetails = async (data) => {
	try {
		let result = await serviceCalls.get( data, false);
		return result;
	} catch (e) {
		return {};
	}
}
