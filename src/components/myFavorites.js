import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {MdRemoveCircle} from 'react-icons/md'
export const MyFavorites = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="row">
            <div className="col-md-4">
                <ul className="list-group">
                    {
                        !!store.favorite.length !== 0 &&
                        store.favorite.map((value, index) => {
                            return <li className="list-group-item" key={index} >
                                {value}test
                                <i onClick={()=>actions.removeFavorite(value)}><MdRemoveCircle/></i>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};