import serviceCalls from "../services/index.js";

export const fetchPokemons = async (data) => {
	console.log('api', data);
	try{
		let result = await serviceCalls.get(data, false);
		return result;
	} catch(e) {
		return {};
	}
}
