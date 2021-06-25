import { useContext, useState } from 'react'; // eslint-disable-next-line
import { Context } from '../store/appContext'; // eslint-disable-next-line
import Pagination from 'react-js-pagination';
import Card from './card';
import LoadingSpinner from './loadingSpinner';

const SWStarships = () => {
    const { store, actions } = useContext(Context);
    const { starships } = store;
    const [page, setPage] = useState(1);
    const handleChangePage = (pageNumber) => {
        setPage(pageNumber);
        actions.getStarships(`https://www.swapi.tech/api/starships/?page=${pageNumber}&limit=6`);
    };
    return (
        <div className="row">
            <div className="row mt-2">
                <h2 className="h2 text-white">Starships</h2>
                <div
                    className="col-md-12 d-flex align-content-center">
                    <p className="text-white">List of Starships that we get by consuming swapi.tech/api</p>
                </div>
            </div>
            <div className="row bg-custom rounded-3 py-1">
                {
                    !!starships ?
                        <Card elements={starships} route="starships" />
                        :
                        <LoadingSpinner />
                }
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center pt-4 pb-3">
                    {
                        !!starships &&
                            starships.results.length > 0 ? (
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={6}
                                totalItemsCount={starships.total_records}
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
}

export default SWStarships;