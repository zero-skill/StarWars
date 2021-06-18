import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import { Characters } from './views/characters';
import { Favorites } from './views/favorites';
import {Home} from './views/home';
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
                    <Route exact path="/favorites" component={Favorites} />
                    {/*<Route component={NotFound} />*/}
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default injectContext(App);
