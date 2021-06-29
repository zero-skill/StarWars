import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import LoadingSpinner from "../../components/loadingSpinner";
import { Link } from "react-router-dom";
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';

function CharacterDetails() {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const { character, favorites } = store;
    useEffect(() => {
        actions.getCharacter(`https://www.swapi.tech/api/people/${params.id}`);
    }// eslint-disable-next-line react-hooks/exhaustive-deps
        , [])
    const getImgName = name => {
        return name.toLowerCase().split(" ").join("-") + ".jpg";
    };
    return (
        <div className="row bg-custom rounded-3 my-3">
            {!!character &&
                character.data.result.properties.name.split(" ").join("").toLowerCase() === params.name ?
                (
                    <div className="card character-details my-0 shadow">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 character-details-img">
                                <div className="row">
                                    <img
                                        src={`/img/people/${getImgName(character.data.result.properties.name)}`}
                                        className="img-fluid rounded shadow " alt={`img of ${character.data.result.properties.name}`}
                                    />
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-around py-3">
                                        <Link to="/characters" className="btn-link">
                                            <button type="button" className="btn btn-outline-secondary" >
                                                Back to characters
                                            </button>
                                        </Link>
                                        {(favorites.indexOf(character.data.result.properties.name) === -1) ?
                                            (
                                                <div className="btn btn-outline-danger" onClick={()=>{
                                                    actions.addFavorite(character.data.result.properties.name)
                                                }}>
                                                    <AiOutlineHeart/>
                                                </div>
                                            ) : (
                                                <div className="btn btn-danger" onClick={()=>{
                                                    actions.removeFavorite(character.data.result.properties.name)
                                                }}>
                                                    <AiFillHeart/>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="card-body">
                                    <h3 className="card-title fs-2 mb-3 text-center ">
                                        {character.data.result.properties.name}
                                    </h3>
                                    <ul className="list-group text-center shadow">
                                        <li className="list-group-item d-flex justify-content-between"><span>Gender:</span> <span>{character.data.result.properties.gender}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Height:</span> <span>{character.data.result.properties.height}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Mass:</span> <span>{character.data.result.properties.mass}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Hair color:</span> <span>{character.data.result.properties.hair_color}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Skin color:</span> <span>{character.data.result.properties.skin_color}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Eye color:</span> <span>{character.data.result.properties.eye_color}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Birth year:</span> <span>{character.data.result.properties.birth_year}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Homeworld:</span>
                                            {!!character.planet ?
                                                <Link className="text-info" to={`/planets/${character.planet.result.properties.name.split(" ").join("").toLowerCase()}/${character.planet.result.uid}`}>
                                                    {character.planet.result.properties.name}
                                                </Link> :
                                                <span>
                                                    Homeworld error
                                                </span>
                                            }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                ) :
                <LoadingSpinner />
            }
        </div >
    )
}
export default CharacterDetails;