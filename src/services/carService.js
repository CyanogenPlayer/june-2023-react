import {apiService_CarsAPI} from "./apiServices";
import {urls} from "../constants";

class CarService {
    getAll() {
        return apiService_CarsAPI.get(urls.cars)
    }
}

export const carService = new CarService()