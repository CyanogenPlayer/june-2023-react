import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Episode} from "./Episode";
import css from './Episodes.module.css'
import {episodeActions} from "../../redux";

const Episodes = () => {
    const {episodes, prev, next} = useSelector(state => state.episodes);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    const page = query.get('page');

    useEffect(() => {
        dispatch(episodeActions.getAll({page}))
    }, [page, dispatch]);

    const prevButtonClick = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`);
            return prev
        })
    }

    const nextButtonClick = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`);
            return prev;
        })
    }

    return (
        <div>
            <div className={css.Episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttonsBlock}>
                <button onClick={prevButtonClick} disabled={!prev}>prev</button>
                <button onClick={nextButtonClick} disabled={!next}>next</button>
            </div>
        </div>
    );
};

export {
    Episodes
}