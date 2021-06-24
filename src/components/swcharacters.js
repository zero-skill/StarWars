import { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import Pagination from 'react-js-pagination';
import Card from './card'
import LoadingSpinner from './loadingSpinner';

const SWCharacters = () => {
    const { store, actions } = useContext(Context);
    const { people } = store;
    const [page, setPage] = useState(1);

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
                    !!people ?
                        <Card elements={people} route="people" />
                        :
                        <LoadingSpinner />
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