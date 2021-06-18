const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
           
            characters: null,
            error: null,
            favorite: [],
        },
        actions: {
            getCharacters: async (url, options ={
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
                        characters: data
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
export default getState;