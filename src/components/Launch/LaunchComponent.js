import React from 'react';

import css from './Launch.module.css';

const LaunchComponent = ({launch: {mission_name, launch_year, links: {mission_patch_small}}}) => {
    return (
        <div className={css.Launch}>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default LaunchComponent;