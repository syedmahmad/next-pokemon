
import Layout from "../layout";
import Pokemons from "../components/pokemons";
import {withRouter} from "next/router";

 const  Home = (props) => {
  return (
   <Layout>
     <Pokemons router={props.router}/>
   </Layout>
  )
}

export default withRouter(Home)
