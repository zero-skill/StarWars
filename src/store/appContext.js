import { createContext, useEffect, useState } from 'react';
import getState from './flux';
export const Context = createContext(null);

export default function injectContext(PassedComponent){
    const StoreWrapper = props => {
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updateStore => setState({
                store: Object.assign(state.store, updateStore),
                actions: { ...state.actions }
            })
        }));

        useEffect(() => {
            state.actions.getPeople('https://swapi.dev/api/people?page=1&limit=9',{});
        },[]);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );

    }
    return StoreWrapper;
}

