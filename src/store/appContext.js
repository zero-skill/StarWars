import { createContext, useEffect, useState } from 'react';
import getState from './flux.js';
export const Context = createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updateStore => setState({
                store: Object.assign(state.store, updateStore),
                actions:{...state.actions}
            })
        }));

        useEffect(() => {
            // funciones a ejecutar cuando carga la pagina
            state.actions.getList();
            state.actions.getCharacters("https://swapi.dev/api/people/");
            state.actions.getPlanets("https://swapi.dev/api/planets/");
            state.actions.getStarShips("https://swapi.dev/api/starships/");
        }, [])

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        )

    }
    return StoreWrapper;
}

export default injectContext;