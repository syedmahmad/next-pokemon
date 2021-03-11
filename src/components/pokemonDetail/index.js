import React, { useEffect } from 'react';
import { getPokemonsDetail } from '../../actions/pokemons';
import { shallowEqual, useDispatch, useSelector } from "react-redux";


function PokemonDetail(props) {
	const dispatch = useDispatch();

	const { loading, pokemonDetail } = useSelector((state) => ({
		loading: state.pokemons.loading,
		pokemonDetail: state.pokemons.pokemonDetail
	}), shallowEqual);

	useEffect(() => {
		dispatch(getPokemonsDetail(props?.slug));
	}, []);

	const renderPokemonDetail = (detail) => {
			return (
				<>
					<h1 className="flex justify-start cursor-pointer pl-10" onClick={() => props.router.back()}>Go Back</h1>
				<div className="p-6 flex flex-col transition duration-500 ease-in-out hover:bg-transparent text-center items-center justify-center">
					<h1>NAME: {detail?.name}</h1>
					<p>HEIGHT: {detail?.height} </p>
					<p>WEIGHT: {detail?.weight} </p>
					<p className="mt-5">A brief look at how {detail?.name} sprites have changed over the years.</p>
						<div className="mt-4 grid grid-cols-2 h-full items-start justify-items-center">
					{ detail && Object.entries(detail?.sprites).map(([key, value]) => {
						if (key != 'other' && key != 'versions' && key && value) {
							return (
								<div className="p-2">
									<div className="">
										<span>{key}:</span>
										<img className="mx-10" src={value} alt={key}  height='50' width='50'/>
									</div>
								</div>
							)
						}
						})
					}
					</div>
					</div>
				</>
			);
	}
	return (
		<>
			{ loading ? <div>Loading...</div> : null}
			{ pokemonDetail && !Object.keys(pokemonDetail).length ? null :
					<div className='pokemons'>
						{ renderPokemonDetail(pokemonDetail) }
					</div>
			}
		</>
	);
}

export default PokemonDetail;
