import Head from 'next/head';

function Layout(props) {
	return(
		<>
			<Head>
				<title>Pokemons</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="w-full app-layout h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
				<div className="app-content space-y-8 w-full bg-gradient-to-r from-green-400 to-blue-500">
					{props.children}
				</div>
			</div>
		</>
	);
}

export default Layout
