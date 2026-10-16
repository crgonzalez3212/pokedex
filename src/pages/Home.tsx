import { useEffect, useState } from "react";

import PokemonCard from "../components/PokemonCard";

interface Pokemon {
  id?: number;
  name: string;
  image: string;
  type: string;
}

function Home() {

    const pokemonsHardCoded = [
        {
            name: "Pikachu",
            type: "Electrico",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        },

        {
            name: "Charmander",
            type: "Fuego",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
            name: "Cristian",
            type: "X",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
            name: "Greninja - Andres Diaz",
            type: "Agua",
            image: "https://pokebase.app/pokemon-go/pokemon/ash-greninja.png"
        }
    
    ];

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);


    const [loading, setLoading] = useState(true);



    useEffect(() => {


        loadPokemon();


    }, []);



    const loadPokemon = async () => {


        const data = pokemonsHardCoded;


        setPokemons(data);


        setLoading(false);


    }



    if (loading) {

        return <h2>Cargando pokemons...</h2>

    }



    return (

        <div className="container mt-4">


            <h1>
                🎮 Pokédex
            </h1>



            <div className="row">


                {

                    pokemons.map(pokemon => (


                        <div
                            className="col-md-3"
                            key={pokemon.id}
                        >


                            <PokemonCard


                                name={pokemon.name}

                                image={pokemon.image}

                                type={pokemon.type}


                            />


                        </div>


                    ))


                }



            </div>


        </div>


    )


}


export default Home;