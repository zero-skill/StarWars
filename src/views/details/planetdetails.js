import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import LoadingSpinner from "../../components/loadingSpinner";
import { Link } from "react-router-dom";
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';


function PlanetsDetails() {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const { planet,favorites } = store;
    useEffect(() => {
        actions.getPlanet(`https://www.swapi.tech/api/planets/${params.id}`);
    }// eslint-disable-next-line react-hooks/exhaustive-deps
    , [])
    const getImgName = name => {
        return name.toLowerCase().split(" ").join("-") + ".jpg";
    };
    return (
        <div className="row bg-custom rounded-3 my-3">
           { !!planet &&
                planet.result.properties.name.split(" ").join("").toLowerCase()?
                (
                    <div className="card planet-details my-0 shadow">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 planet-details-img">
                                <div className="row">
                                    <img
                                        src={`/img/planets/${getImgName(planet.result.properties.name)}`}
                                        className="img-fluid rounded shadow " alt={`img of ${planet.result.properties.name}`}
                                    />
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-around py-3">
                                        <Link to="/planets" className="btn-link">
                                            <button type="button" className="btn btn-outline-secondary" >
                                                Back to planets
                                            </button>
                                        </Link>
                                        {(favorites.indexOf(planet.result.properties.name) === -1) ?
                                            (
                                                <div className="btn btn-outline-danger" onClick={()=>{
                                                    actions.addFavorite(planet.result.properties.name)
                                                }}>
                                                    <AiOutlineHeart/>
                                                </div>
                                            ) : (
                                                <div className="btn btn-danger" onClick={()=>{
                                                    actions.removeFavorite(planet.result.properties.name)
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
                                        {planet.result.properties.name}
                                    </h3>
                                    <ul className="list-group text-center shadow">
                                        <li className="list-group-item d-flex justify-content-between"><span>Climate:</span> <span>{planet.result.properties.climate}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Diameter:</span> <span>{planet.result.properties.diameter}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Gravity:</span> <span>{planet.result.properties.gravity}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Orbital Period:</span> <span>{planet.result.properties.orbital_period}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Population:</span> <span>{planet.result.properties.population}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Rotation Period:</span> <span>{planet.result.properties.rotation_period}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Surface water:</span> <span>{planet.result.properties.surface_water}</span></li>
                                        <li className="list-group-item d-flex justify-content-between"><span>Terrain:</span><span>{planet.result.properties.terrain}</span></li>
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
export default PlanetsDetails;