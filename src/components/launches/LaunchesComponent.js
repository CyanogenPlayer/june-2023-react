import React, {useEffect, useState} from 'react';

import css from './Launches.module.css';
import LaunchComponent from "../Launch/LaunchComponent";

const LaunchesComponent = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => value.filter(value => value.launch_year !== "2020"))
            .then(value => setLaunches(value))
    }, []);

    return (
        <div className={css.Launches}>
            {launches.map(launch => <LaunchComponent key={launch.flight_number} launch={launch}/>)}
        </div>
    );
};

export default LaunchesComponent;