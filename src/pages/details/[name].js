
import PokemonDetail from "../../components/pokemonDetail";
import Layout from "../../layout";
import { withRouter } from "next/router";


const  Home = (props) =>  {
	return (
		<Layout>
			<PokemonDetail router={props.router} slug={props.slug}/>
		</Layout>
	)
}

export async function getServerSideProps(context) {
	return {
		props: {slug: context.query.name}
	}
}

export default withRouter(Home)
