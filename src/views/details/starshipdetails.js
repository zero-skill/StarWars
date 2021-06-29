import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import LoadingSpinner from "../../components/loadingSpinner";
import { Link } from "react-router-dom";
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';

function StarshipDetails(){
    const params = useParams();
    const { store, actions } = useContext(Context);
    const { starship,favorites } = store;
    useEffect(() => {
        actions.getStarship(`https://www.swapi.tech/api/starships/${params.id}`);
    }// eslint-disable-next-line react-hooks/exhaustive-deps
    , [])
    const getImgName = name => {
        return name.toLowerCase().split(" ").join("-") + ".jpg";
    };
    return (
        <div className="row bg-custom rounded-3 my-3">
           { !!starship &&
                starship.result.properties.name.split(" ").join("").toLowerCase()?
                (
                    <div className="card starship-details my-0 shadow">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 starship-details-img">
                                <div className="row">
                                    <img
                                        src={`/img/starships/${getImgName(starship.result.properties.name)}`}
                                        className="img-fluid rounded shadow " alt={`img of ${starship.result.properties.name}`}
                                    />
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-around py-3">
                                        <Link to="/starships" className="btn-link">
                                            <button type="button" className="btn btn-outline-secondary" >
                                                Back to starships
                                            </button>
                                        </Link>
                                        {(favorites.indexOf(starship.result.properties.name) === -1) ?
                                            (
                                                <div className="btn btn-outline-danger" onClick={()=>{
                                                    actions.addFavorite(starship.result.properties.name)
                                                }}>
                                                    <AiOutlineHeart/>
                                                </div>
                                            ) : (
                                                <div className="btn btn-danger" onClick={()=>{
                                                    actions.removeFavorite(starship.result.properties.name)
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
                                        {starship.result.properties.name}
                                    </h3>
                                    <ul className="list-group text-center shadow">
                                        <li className="list-group-item d-flex justify-content-between"><span>Model:</span> <span>{starship.result.properties.model}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Starship Class:</span> <span>{starship.result.properties.starship_class}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Manufacturer:</span> <span>{starship.result.properties.manufacturer}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Cost in credits:</span> <span>{starship.result.properties.cost_in_credits}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Length:</span> <span>{starship.result.properties.length}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Crew:</span> <span>{starship.result.properties.crew}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Passengers:</span> <span>{starship.result.properties.passengers}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Max atmosphering speed:</span><span>{starship.result.properties.max_atmosphering_speed}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Hyperdrive rating:</span><span>{starship.result.properties.hyperdrive_rating}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>MGLT:</span><span>{starship.result.properties.MGLT}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Cargo capacity:</span><span>{starship.result.properties.cargo_capacity}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Consumables:</span><span>{starship.result.properties.consumables}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ) :
                <LoadingSpinner />
            }
        </div >
    );
}
export default StarshipDetails;