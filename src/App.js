import React from 'react';
import PeopleComponent from "./components/PeopleComponent/PeopleComponent";
import {simpsons} from "./data/Simpsons";
import {characters} from "./data/RickAndMorty";

const App = () => {
    return (
        <div>
            <PeopleComponent people={simpsons}/>

            <PeopleComponent people={characters}/>
        </div>
    );
};

export default App;