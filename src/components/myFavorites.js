import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {MdRemoveCircle} from 'react-icons/md'
export const MyFavorites = () => {
    const { store, actions } = useContext(Context);
    const {favorites} = store;

    return (
        <div className="row ">
        
            <div className="col-md-6 mx-auto my-3 ">
                <ul className="list-group">
                    {
                        favorites.length >= 1 ?
                        store.favorites.map((value, index) => {
                            return <li className="list-group-item d-flex justify-content-between" key={index} >
                                {value}
                                <i onClick={()=>actions.removeFavorite(value)}><MdRemoveCircle/></i>
                            </li>
                        }):(
                            <li className="list-group-item">You dont have favorites.</li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};