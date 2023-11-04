import {useEffect, useState} from "react";
import {carService} from "../../services";
import {Car} from "./Car";
import {useSearchParams} from "react-router-dom";

const Cars = () => {
    const [cars, setCars] = useState([])

    const [prevNext, setPrevNext] = useState({prev: null, next: null});

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        carService.getAll(query.get('page')).then(({data}) => {
            setCars(data.items);
            setPrevNext({prev: data.prev, next: data.next})
        })
    }, [query.get('page')]);

    // const change = () => {
    //     setQuery(prev => {
    //         prev.set('name', 'smth');
    //         return prev;
    //     })
    // }

    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`);
            return prev;
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
            {cars.map(car => <Car key={car.id} car={car}/>)}
            <hr/>
            <button disabled={!prevNext.prev} onClick={prev}>prev</button>
            <button disabled={!prevNext.next} onClick={next}>next</button>
            {/*<h1>{query.get('name')}</h1>*/}
            {/*<button onClick={change}>change</button>*/}
        </div>
    );
};

export {
    Cars
}