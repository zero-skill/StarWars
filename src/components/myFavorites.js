import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {MdRemoveCircle} from 'react-icons/md'
export const MyFavorites = () => {
    const { store, actions } = useContext(Context);
    const {favorites} = store;

    return (
        <div className="row">
        HOLA FAVORITES
            <div className="col-md-4">
                <ul className="list-group">
                    {
                        favorites.length >= 1 ?
                        store.favorites.map((value, index) => {
                            return <li className="list-group-item" key={index} >
                                {value}
                                <i onClick={()=>actions.removeFavorite(value)}><MdRemoveCircle/></i>
                            </li>
                        }):(
                            "empty"
                        )
                    }
                </ul>
            </div>
        </div>
    );
};