function LoadingSpinner(){
    return(
    <div className="col-md-12 p5 d-flex justify-content-center">
        <div className="spinner-border text-success my-5" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
    );
}
export default LoadingSpinner;