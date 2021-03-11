import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'
import pokemons from './pokemons';

const rootReducer = combineReducers({
	pokemons: pokemons,
	toastr: toastrReducer
});

export default rootReducer;
