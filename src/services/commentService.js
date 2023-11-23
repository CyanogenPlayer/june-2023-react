import {apiService_JSONPlaceholder} from "./apiServices";
import {urls} from "../constants";

class CommentService {
    getAll() {
        return apiService_JSONPlaceholder.get(urls.comments)
    }
}

export const commentService = new CommentService()