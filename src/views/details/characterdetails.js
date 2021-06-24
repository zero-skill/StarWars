import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import LoadingSpinner from "../../components/loadingSpinner";

function CharacterDetails() {
    const params = useParams();
    const { store, actions } = useContext(Context);
    const { character } = store;
    useEffect(() => {
        actions.getCharacter(`http://www.swapi.tech/api/people/${params.id}`);
    }, [])
    return (
        <>
            {!!character &&
                character.data.result.properties.name.split(" ").join("").toLowerCase() === params.name ?
                (
                    <div>list of properties
                        <ul>
                            <li>hair color: {character.data.result.properties.hair_color}</li>
                        </ul>
                    </div>
                ):
                <LoadingSpinner />
            }
        </>
    )
}
export default CharacterDetails;