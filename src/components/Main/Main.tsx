import Card from "../Card/Card"
import { MainPokemon } from "../../react-app-env"
import './Main.css';
import PaginatedData from "../Pagination/Pagination";


interface MainProps{
  pokemons: MainPokemon[]
}

export default function Main({pokemons}:MainProps ){
  return(
    <>
      <PaginatedData itemsPerPage={20} items={pokemons}/>
    </>
  )
  
}