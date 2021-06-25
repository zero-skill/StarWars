export const Homepage = () => {

    return (
            <div id="carouselExampleFade" className="carousel slide carousel-fade my-4 mx-auto" data-bs-ride="carousel">
                <div className="carousel-inner rounded-3">
                    <div className="carousel-item active">
                        <img src="/img/hero1.jpg" className="d-block w-100" alt="hero1" />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/hero2.jpg" className="d-block w-100" alt="hero2" />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/hero3.jpg" className="d-block w-100" alt="hero3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    );
}