import { useEffect, useState } from "react";

import PokemonCard from "../components/PokemonCard";

import { getPokemons } from "../services/pokemonService";


function Home() {


    const [pokemons, setPokemons] = useState([]);


    const [loading, setLoading] = useState(true);



    useEffect(() => {


        loadPokemon();


    }, []);



    const loadPokemon = async () => {


        const data = await getPokemons();


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