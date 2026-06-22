import PokemonCard from "../components/PokemonCard";


function Home() {

    const pokemons = [
        {
            name: "Pikachu",
            type: "Electrico",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        },

        {
            name: "Charmander",
            type: "Fuego",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        }

    ]


    return (

        <div>

            <h1>Pokedex</h1>


            <div className="d-flex">

                {
                    pokemons.map(pokemon => (

                        <PokemonCard

                            name={pokemon.name}
                            type={pokemon.type}
                            image={pokemon.image}

                        />

                    ))

                }


            </div>


        </div>

    )

}

export default Home;