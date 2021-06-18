import {useContext, useState } from 'react'; 
import {Context} from '../store/appContext';
import Pagination from 'react-js-pagination';

export const SWCharacters = () => { 
    const {store, actions } = useContext(Context);
    const {character} = store;
    const [page, setPage]= useState(1);
    const getImgName = name => {
        return name.toLowerCase().split(" ").join("-")+".jpg";
    };
    const handleChangePage = (pageNumber)=>{
        setPage(pageNumber);
        actions.getCharacters(`https://www.swapi.tech/api/people/?page=${pageNumber}&limit=9`);
    };
    return (
        <div className="row">
            HOLA characters
        </div>
    );
}
