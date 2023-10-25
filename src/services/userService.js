import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";

const userService = {
    getAll: () => axiosService.get(urls.users.base),
    create: (data) => axiosService.post(urls.users.base, data)
}

export {
    userService
}