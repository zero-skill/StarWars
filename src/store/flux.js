export default function getState({ getStore, getActions, setStore }) {
    return {
        store: {
           
            people: null,
            error: null,
            favorite: [],
        },
        actions: {
            getPeople: async (url, options ={
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }) => {
                try {
                    const response = await fetch(url,options);
                    if (response.status!==200) {
                        throw new Error({message: 'Error fetching Characters.'})
                    }
                    const data = await response.json();
                    setStore({
                        people: data
                    });
                } catch (error) {
                    setStore({
                        error:error.message
                    });
                }
            }
               
        }
    }
}