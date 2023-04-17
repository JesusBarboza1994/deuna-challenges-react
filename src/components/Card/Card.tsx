import { Link } from "react-router-dom";
import { MainPokemon } from "../../react-app-env"
import './Card.css';

interface CardInterface{
  pokemon: MainPokemon,
  index:number
}

export default function Card({pokemon, index}: CardInterface){
  
  function handleIndex(index: string): string{
    let number = index
    while(number.length < 4){
      number = "0" + number
    }
    return "N° " + number
  }

  function handleUrl(){
    const urlParts = pokemon.url.split("/")
    return urlParts[urlParts.length - 2];
  }

  return(
    <Link to={`/pokemon/${index+1}`} className="link">
      <div className="card">
        <h1 className="card-title">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <p>{handleIndex((handleUrl()).toString())}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${handleUrl()}.png`} alt={pokemon.name}/>
      </div>
    </Link>
  )
}