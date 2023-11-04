import {useNavigate} from "react-router-dom";

import css from './Episode.module.css'

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;

    const navigate = useNavigate();

    const viewCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        navigate(`/characters/${ids}`);
    }
    
    return (
        <div className={css.Episode}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
            <button onClick={() => viewCharacters()}>View characters</button>
        </div>
    );
};

export {
    Episode
}