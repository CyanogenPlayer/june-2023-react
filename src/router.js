import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CharactersPage, EpisodesPage} from "./pages";
import {characterService} from "./services";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'episodes'}/>},
            {path: 'episodes', element: <EpisodesPage/>},
            {
                path: 'characters/:ids',
                element: <CharactersPage/>,
                loader: ({params: {ids}}) => characterService.getByIds(ids)
            }
        ]
    }
]);

export {
    router
}