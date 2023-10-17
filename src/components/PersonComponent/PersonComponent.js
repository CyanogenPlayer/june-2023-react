import React from 'react';

import "./PersonComponent.css";

const PersonComponent = ({person: {name, image, status, species, gender}}) => {
    return (
        <div className="PersonComponent">
            <div>{name}</div>
            <img src={image} alt={name}/>
            <div>gender: {gender}</div>
            <div>status: {status}</div>
            <div>species: {species}</div>

        </div>
    );
};

export default PersonComponent;