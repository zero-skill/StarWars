import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import { Favorites } from './views/favorites'
import Navbar from './components/navbar';
const App=(props)=> {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container h-100">
                <Switch>
                    <Route exact path="/Favorites" component={Favorites} />
                    {/*<Route component={NotFound} />*/}
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
