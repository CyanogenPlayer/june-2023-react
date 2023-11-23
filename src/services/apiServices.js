import axios from "axios";

import {baseURL_CarsAPI, baseURL_JSONPlaceholder} from "../constants";

const apiService_JSONPlaceholder = axios.create({baseURL: baseURL_JSONPlaceholder})
const apiService_CarsAPI = axios.create({baseURL: baseURL_CarsAPI})

export {
    apiService_CarsAPI,
    apiService_JSONPlaceholder
}