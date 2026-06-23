
interface pokInter {
    name: string,
    image: string,
    type: string
}

function PokemonCard({ name, image, type }: pokInter) {
 
    return (

        <div className="card m-2">

            <img
                src={image}
                className="card-img-top"
            />

            <div className="card-body">

                <h3>{name}</h3>

                <p>
                    Tipo: {type}
                </p>

            </div>

        </div>

    )

}

export default PokemonCard;