import {apiService_JSONPlaceholder} from "./apiServices";
import {urls} from "../constants";

class PostService {
    getAll() {
        return apiService_JSONPlaceholder.get(urls.posts)
    }
}

export const postService = new PostService()