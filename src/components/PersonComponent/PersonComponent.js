import React from 'react';

const PersonComponent = ({person: {name, image, status, species, gender}}) => {
    return (
        <div>
            <div>{name}</div>
            <div>gender: {gender}</div>
            <div>status: {status}</div>
            <div>species: {species}</div>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export default PersonComponent;