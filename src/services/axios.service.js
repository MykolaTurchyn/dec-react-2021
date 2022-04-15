import axios from "axios";
import {urls} from "../constants/urls";

const baseURL = "http://owu.linkpc.net/api/v2"

const axiosInstance = axios.create({baseURL});
const CarService = {

    getAllCars: () => axiosInstance.get(urls.cars),
    getCarById: (id) => axiosInstance.get(`${urls.cars}/${id}`),
    createCar: (car) => axiosInstance.post(urls.cars, car),
    deleteCarById: (id) => axiosInstance.delete(`${urls.cars}/${id}`),
    updateCarById: (id, newCar) => axiosInstance.put(`${urls.cars}/${id}`, newCar)
}


export default CarService;