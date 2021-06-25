import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import { Characters } from './views/characters';
import { Planets } from './views/planets';
import { Starships } from './views/starships';
import { Favorites } from './views/favorites';
import { Home } from './views/home';
import { NotFounded } from './views/notfounded';
import CharacterDetails  from './views/details/characterdetails';
import Navbar from './components/navbar';
import Footer from './components/footer';
import injectContext from './store/appContext';
import PlanetsDetails from './views/details/planetdetails';
const App = (props) => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container h-100">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/characters" component={Characters} />
                    <Route exact path="/planets" component={Planets} />
                    <Route exact path="/starships" component={Starships} />
                    <Route exact path="/favorites" component={Favorites} />
                    <Route exact path="/people/:name/:id" component={CharacterDetails} />
                    <Route exact path="/planets/:name/:id" component={PlanetsDetails}/>
                    <Route component={NotFounded} />
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default injectContext(App);
