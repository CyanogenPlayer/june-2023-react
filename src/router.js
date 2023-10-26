import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import CommentsPage from "./pages/CommentsPage";
import PostPage from "./pages/PostPage";
import TodosPage from "./pages/TodosPage";
import AlbumsPage from "./pages/AlbumsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'todos'}/>},
            {path: 'todos', element: <TodosPage/>},
            {path: 'albums', element: <AlbumsPage/>},
            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'post', element: <PostPage/>}
                ]
            }
        ]
    },
]);

export {
    router
}