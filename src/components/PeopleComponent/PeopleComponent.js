import React from 'react';

import PersonComponent from "../PersonComponent/PersonComponent";
import "./PeopleComponent.css";

const PeopleComponent = ({people}) => {
    return (
        <div className="PeopleComponent">
            {people.map(person => <PersonComponent person={person} key={person.id}/>)}
        </div>
    );
};

export default PeopleComponent;