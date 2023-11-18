import {useNavigate, useParams} from "react-router-dom";

import {Character} from "./Character";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {characterAction} from "../../redux";

const Characters = () => {
    const navigate = useNavigate();
    const {ids} = useParams();
    const {characters} = useSelector(state => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(characterAction.getByIds({ids}))
    }, [ids, dispatch]);

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