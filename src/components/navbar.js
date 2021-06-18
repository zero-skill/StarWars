import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="navbar1">STARWARS</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                         <Link className="nav-link" to="/characters">Characters</Link>
                         </li>
                        {/* <li class="nav-item">
                         <Link className={Location.pathname == "/planets" ? "" : ""} to="/planets">Planets</Link>&nbsp;&nbsp;
                         </li>
                         <li class="nav-item">
                         <Link className={Location.pathname == "/naves" ? "" : ""} to="/naves">Naves</Link>&nbsp;&nbsp;
                         </li>*/}
                        <li className="nav-item">
                            <Link className="nav-link" to="favorites">My favourites</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}
export default Navbar;
