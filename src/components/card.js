import {Link} from 'react-router-dom';
function Card(props) {
    const getImgName = name => {
        return name.toLowerCase().split(" ").join("-") + ".jpg";
    };
    return (
        props.elements &&
        props.elements.results.map((element, index) => (
            <div className="col-md-4" id={"char_" + index} key={index} >
                <div className="card my-3 shadow">
                    <img
                        src={`/img/${props.route}/${getImgName(element.name)}`}
                        className="card-img-top" alt={`img of ${element.name}`}
                    />
                    <div className="card-body">
                        <h4 className="card-title text-center">
                            {element.name}
                        </h4>
                    </div>
                    <div className="card-footer d-flex justify-content-around">
                        <Link to={`${props.route}/${element.name.split(" ").join("").toLowerCase()}/${element.uid}`}>
                            <button type="button" className="btn btn-outline-secondary" >
                                Read more
                            </button>
                        </Link>

                        <div className="btn btn-outline-danger">
                            ♥
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}
export default Card;