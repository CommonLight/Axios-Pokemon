import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AxiosPokemon = (props) => {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon-species?limit=1010')
            .then(response => {setPokemon(response.data.results)})
            .catch((err) => console.log(err))
    }, [])

    return (
        <div id='wrapper'>
            <img className='pokeImage' src={ require("./imgs/Poke.png") } alt="pokemon logo" />
            <p className="pokeTitle">THE COMPLETE LIST</p>
            <hr />
            <ul className='pokeList'>
                {pokemon.map((pokemon, index) => (
                    (<li key= {index} > {pokemon.name} </li>)
            ))}
            <p className='end'>THE END</p>
            </ul>
        </div>
    )
}

export default AxiosPokemon