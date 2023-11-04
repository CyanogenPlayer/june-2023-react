import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {episodeService} from "../../services";
import {Episode} from "./Episode";
import css from './Episodes.module.css'

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [prevNext, setPrevNext] = useState({prev: null, next: null});
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        episodeService.getAll(query.get('page')).then(({data: {info, results}}) => {
            setEpisodes(results)
            setPrevNext({prev: info.prev, next: info.next})
        })
    }, [query.get('page')]);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`);
            return prev
        })
    }

    const next = () => {
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
                <button onClick={prev} disabled={!prevNext.prev}>prev</button>
                <button onClick={next} disabled={!prevNext.next}>next</button>
            </div>
        </div>
    );
};

export {
    Episodes
}