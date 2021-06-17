const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            c: 0,
            characters: null,
            planets: null,
            spaceships: null,
            images: null,
            favorite: [],
        },
        actions: {
            getCharacter: async (url) => {
                if (url.includes("page")) {
                    let page = url.split("=")[1];
                    if (page > 1) {
                        setStore({
                            c: parseInt(page) * 10 - 10
                        });
                    } else {
                        setStore({
                            c: 0
                        })
                    }
                } else {
                    setStore({
                        c: 0
                    })
                }
                const response = await fetch(url);
                const data = await response.json();
                setStore({
                    characters: data,
                });
            },
            getPlanets: async (url) => {
                if (url.includes("page")) {
                    let page = url.split("=")[1];
                    if (page > 1) {
                        setStore({
                            c: parseInt(page) * 10 - 10
                        })
                    } else {
                        setStore({
                            c: 0
                        })
                    }
                } else {
                    setStore({
                        c: 0
                    })
                }
                const response = await fetch(url);
                const data = await response.json();
                setStore({
                    planets: data,
                });
            },
            getSpaceShips: async (url) => {
                if (url.includes("page")) {
                    let page = url.split("=")[1];
                    if (page > 1) {
                        setStore({
                            c: parseInt(page) * 10 - 10
                        })
                    } else {
                        setStore({
                            c: 0
                        })
                    }
                } else {
                    setStore({
                        c: 0
                    })
                }
                const response = await fetch(url);
                const data = await response.json();
                setStore({
                    naves: data,
                })
            },
            addFavorite: (character) => {
                if (getStore().favorite.includes(character)) {
                    alert("This character is already in your favorites.");
                }
                else {
                    setStore({
                        favorite: getStore().favorite.concat(character)
                    });
                    getActions().saveLike();
                }
            },
            removeFavorite: character => {
                setStore({
                    favorite: getStore().favorite.filter(fav => fav !== character)
                })
                getActions().saveLike()

            },
            saveLike: () => {
                localStorage.setItem("list", JSON.stringify(getStore().favorite))
            },
            getList: () => {
                if (localStorage.getItem("list")) {
                    let data = localStorage.getItem("list");
                    setStore({
                        favorite: JSON.parse(data)
                    });
                }
            },
        },
    }
}
export default getState;