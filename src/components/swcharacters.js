import { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import Pagination from 'react-js-pagination';

const SWCharacters = () => {
    const { store, actions } = useContext(Context);
    const { people } = store;
    const [page, setPage] = useState(1);
    const getImgName = name => {
        return name.toLowerCase().split(" ").join("-") + ".jpg";
    };
    const handleChangePage = (pageNumber) => {
        setPage(pageNumber);
        actions.getPeople(`https://www.swapi.tech/api/people/?page=${pageNumber}&limit=6`);
    };
    return (
        <div className="row">
            <h1>Characters</h1>
            <div className="row">
                <div
                    className="col-md-12 d-flex align-content-center">
                    <p>List of Characters</p>
                </div>
            </div>
            <div className="row">
                {
                    !!people &&
                        people.results.length > 0 ?
                        people.results.map((character, index) => (
                            <div className="col-md-4" id={"char_" + index} key={index} >
                                <div className="card my-3 shadow">
                                    <img
                                        src={`/img/characters/${getImgName(character.name)}`}
                                        className="card-img-top" alt="img"
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title text-center">
                                            {character.name}
                                        </h4>
                                    </div>
                                    <div className="card-footer d-flex justify-content-around">
                                        <button type="button" className="btn btn-outline-secondary" >
                                            Read more
                                        </button>
                                        
                                        <div className="btn btn-outline-danger">
                                            ♥
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : (
                            <div className="col-md-12 p5 d-flex justify-content-center">
                                <div className="spinner-border text-success my-5" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )
                }
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center py-5">
                    {
                        !!people &&
                            people.results.length > 0 ? (
                                <Pagination
                                    activePage={page}
                                    itemsCountPerPage={6}
                                    totalItemsCount={people.total_records}
                                    onChange={handleChangePage}
                                    itemClass="page-item"
                                    linkClass="page-link"
                                />
                            ) : ("")
                    }
                </div>
            </div>
        </div>
    );
};
export default SWCharacters;