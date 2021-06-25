import { useContext, useState } from 'react'; // eslint-disable-next-line
import { Context } from '../store/appContext'; // eslint-disable-next-line
import Pagination from 'react-js-pagination';
import Card from './card';
import LoadingSpinner from './loadingSpinner';

const SWPlanets = () => {
    const { store, actions } = useContext(Context);
    const { planets } = store;
    const [page, setPage] = useState(1);

    const handleChangePage = (pageNumber) => {
        setPage(pageNumber);
        actions.getPlanets(`https://www.swapi.tech/api/planets/?page=${pageNumber}&limit=6`);
    };
    return (
        <div className="row">
            <div className="row mt-2">
                <h2 className="h2 text-white">Planets</h2>
                <div
                    className="col-md-12 d-flex align-content-center">
                    <p className="text-white">List of Planets that we get by consuming swapi.tech/api</p>
                </div>
            </div>
            <div className="row bg-custom rounded-3 py-1">
                {
                    !!planets ?
                        <Card elements={planets} route="planets" />
                        :
                        <LoadingSpinner />
                }
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center pt-4 pb-3">
                    {
                        !!planets &&
                            planets.results.length > 0 ? (
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={6}
                                totalItemsCount={planets.total_records}
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
export default SWPlanets;