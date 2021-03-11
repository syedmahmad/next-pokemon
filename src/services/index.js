import axios from 'axios';

class serviceCalls {
	static get(path, additionalOptions = false) {
		let url = path ? path : "http://pokeapi.co/api/v2/pokemon";
		return axios({
			method: 'get',
			url: url
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err.response;
		})
	}
}

export default serviceCalls

