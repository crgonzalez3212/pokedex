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
            name: "Camilo",
            type: "X",
            image: "data:image/jpeg;base64,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"
        },
        {
            name: "Greninja - Andres Diaz",
            type: "Agua",
            image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/658_f2.png"
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