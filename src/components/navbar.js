import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div className="navbar1">STARWARS</div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link className={Location.pathname == "/" ? "" : ""} aria-current="page" to="/">Home</Link>
                        </li>
                        {/*<li class="nav-item">
                         <Link className={Location.pathname == "/characters" ? "" : ""} to="/characters">Characters</Link>&nbsp;&nbsp;
                         </li>
                         <li class="nav-item">
                         <Link className={Location.pathname == "/planets" ? "" : ""} to="/planets">Planets</Link>&nbsp;&nbsp;
                         </li>
                         <li class="nav-item">
                         <Link className={Location.pathname == "/naves" ? "" : ""} to="/naves">Naves</Link>&nbsp;&nbsp;
                         </li>*/}
                        <li class="nav-item">
                            <Link className={Location.pathname == "/myfavorites" ? "" : ""} to="myfavorites">My favourites</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}
export default Navbar;
