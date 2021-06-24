import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import LoadingSpinner from "../../components/loadingSpinner";

function CharacterDetails() {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const { character } = store;
    useEffect(() => {
        actions.getCharacter(`http://www.swapi.tech/api/people/${params.id}`);
    }, [])
    const getImgName = name => {
        return name.toLowerCase().split(" ").join("-") + ".jpg";
    };
    return (
        <>
            {!!character &&
                character.data.result.properties.name.split(" ").join("").toLowerCase() === params.name ?
                (
                    <div className="card my-3 shadow">
                        <img
                            src={`/img/characters/${getImgName(character.data.result.properties.name)}`}
                            className="card-img" alt="img"
                        />
                        <h4 className="card-title text-center">
                            {character.data.result.properties.name}
                        </h4>
                        <div className="card-body">
                            <ul className="list-group text-center ">
                                <li className="list-group-item d-flex justify-content-between"><span>Gender:</span> <span>{character.data.result.properties.gender}</span></li>
                                <li className="list-group-item d-flex justify-content-between"><span>Height:</span> <span>{character.data.result.properties.height}</span></li>
                                <li className="list-group-item d-flex justify-content-between"><span>Mass:</span> <span>{character.data.result.properties.mass}</span></li>
                                <li className="list-group-item d-flex justify-content-between"><span>Hair color:</span> <span>{character.data.result.properties.hair_color}</span></li>
                                <li className="list-group-item d-flex justify-content-between"><span>Skin color:</span> <span>{character.data.result.properties.skin_color}</span></li>
                                <li className="list-group-item d-flex justify-content-between"><span>Eye color:</span> <span>{character.data.result.properties.eye_color}</span></li>
                                <li className="list-group-item d-flex justify-content-between"><span>Birth year:</span> <span>{character.data.result.properties.birth_year}</span></li>
                                <li className="list-group-item d-flex justify-content-between"><span>Homeworld:</span> <span>{character.data.result.properties.homeworld}</span></li>
                            </ul>
                        </div>
                    </div>
                ) :
                <LoadingSpinner />
            }
        </>
    )
}
export default CharacterDetails;