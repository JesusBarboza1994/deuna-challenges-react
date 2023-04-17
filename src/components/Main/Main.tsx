import Card from "../Card/Card"
import { MainPokemon } from "../../react-app-env"
import PaginatedData from "../Pagination/Pagination";
// import SearchInput from "../SearchInput/SearchInput";

interface MainProps{
  pokemons: MainPokemon[]
}

export default function Main({pokemons}:MainProps ){
  
  return(
    <PaginatedData itemsPerPage={20} items={pokemons}/>
  )
  
}