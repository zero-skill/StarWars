const Footer = () => {
    return (
        <footer>
            <div className="row bg-dark">
                <div className="col-12 d-flex justify-content-center">
                    <span className="text-white">You can follow me on <a className="text-white" style={{'text-decoration': 'none'}} href="https://github.com/zero-skill">GitHub!</a> </span>
                </div>
            </div>
            <div className="row pt-1 bg-dark ">
                <div className="col-12 d-flex justify-content-center">
                    <span className="text-white ">Made with ♥ by </span>
                    <span className="text-white ms-1"><strong> zero-skill</strong></span>
                </div>
                
            </div>
        </footer>
    );
}
export default Footer;