import { getPokemons } from "../../actions/pokemons";
import React, { useState, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

function Pokemons(props) {
	const dispatch = useDispatch();

	const [from, setFrom] = useState(0);
	const [to, setTo] = useState(0);

	const { loading, pokemons } = useSelector((state) => ({
		loading: state.pokemons.loading,
		pokemons: state.pokemons
	}), shallowEqual);

	useEffect(() => {
		dispatch(getPokemons());
	}, []);

	useEffect(() => {
		if (pokemons?.pokemons?.length) {
			const params = new URL(pokemons?.next).searchParams;
			let offset = parseInt(params.get("offset"));
			let limit = parseInt(params.get("limit"));
			setFrom(offset - limit);
			setTo(offset);
		}
	}, [pokemons])

	const getPrevious = () => {
		if (pokemons?.previous) {
			dispatch(getPokemons(pokemons?.previous));
		}
	}

	const getNext = () => {
		if (pokemons?.next) {
			dispatch(getPokemons(pokemons?.next));
		}
	}

	const showMoreDetail = (name) => {
		props.router.push(`/details/${name}`);
	}

	const renderPokemons = () => {
		if (!pokemons?.pokemons?.length) {
			return (
				<div className='notfound'>No pokemons found.</div>
			)
		}

		return pokemons?.pokemons?.map((pokemon, index) => {
			return (
				<div key={index} className="p-6 transition duration-500 ease-in-out hover:bg-transparent transform hover:-translate-y-1 hover:scale-110 cursor-pointer" onClick={() => showMoreDetail(pokemon?.name)}>
					<div className="card-body">
						<h5 className="card-title">{pokemon?.name}</h5>
					</div>
				</div>
			)
		})
	}

	return (
		<>
			{ loading ? <div>Loading...</div> : null}
			{ !pokemons?.pokemons?.length ? null :
				<>
					<h1 className="flex justify-center pt-8">Pokemon Results {pokemons?.count}</h1>
					<div className="grid grid-cols-6 h-full items-center justify-items-center">
						{renderPokemons()}
					</div>

					<div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
						<div className="flex-1 flex justify-between">
							<a href="javascript:;" onClick={getPrevious} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
								Previous
    					</a>
							<div className="sm:flex-1 sm:flex sm:items-center sm:justify-center">
								<div>
									<p className="text-sm text-gray-700">
										Showing &nbsp;
									<span className="font-medium">{from}</span>&nbsp;
									to &nbsp;
									<span className="font-medium">{to}</span>&nbsp;
									of &nbsp;
									<span className="font-medium">{pokemons?.count}</span>&nbsp;
									results
								</p>
								</div>
							</div>
							<a href="javascript:;" onClick={getNext} className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
								Next
    					</a>
						</div>
					</div>
				</>
			}
		</>
	);
}

export default Pokemons;
