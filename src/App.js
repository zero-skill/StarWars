import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import { Characters } from './views/characters';
import { Planets } from './views/planets';
import { Spaceships } from './views/spaceships';
import { Favorites } from './views/favorites';
import {Home} from './views/home';
import {NotFounded} from './views/notfounded';
import Navbar from './components/navbar';
import injectContext from './store/appContext';
const App=(props)=> {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container h-100">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/characters" component={Characters}/>
                    <Route exact path="/planets" component={Planets}/>
                    <Route exact path="/spaceships" component={Spaceships}/>
                    <Route exact path="/favorites" component={Favorites} />
                    <Route component={NotFounded} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default injectContext(App);
