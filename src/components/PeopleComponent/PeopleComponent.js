import React from 'react';
import PersonComponent from "../PersonComponent/PersonComponent";

const PeopleComponent = ({people}) => {
    return (
        <div>
            {people.map(person => <PersonComponent person={person} key={person.id}/>)}
        </div>
    );
};

export default PeopleComponent;