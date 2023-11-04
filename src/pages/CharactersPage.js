import {useLoaderData} from "react-router-dom";

import {Characters} from "../components";

const CharactersPage = () => {
    const {data} = useLoaderData()

    return (
        <div>
            <Characters characters={data}/>
        </div>
    );
};

export {
    CharactersPage
}