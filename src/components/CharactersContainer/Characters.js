import {useNavigate} from "react-router-dom";

import {Character} from "./Character";

const Characters = ({characters}) => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {
    Characters
}