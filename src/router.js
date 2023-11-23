import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CarsPage, CommentsPage, PostsPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'posts'}/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'cars', element: <CarsPage/>}
        ]
    }
])

export {
    router
}