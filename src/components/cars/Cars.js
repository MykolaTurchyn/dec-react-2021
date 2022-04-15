import {useEffect, useState} from "react";
import CarService from "../../services/axios.service";
import Car from "../car/Car";

export default function Cars({newCar,setCarForUpdate}) {
    const [cars, setCars] = useState([]);
    const [deleted, setDeleted] = useState(null);

    useEffect(() => {
        CarService.getAllCars().then(({data}) => {
            setCars(data)
        })
    }, [newCar,deleted])

    // useEffect(() => {
    // if (newCar){
    //     setCars([...cars,newCar])
    // }
    // }, [newCar])         //  без запиту на сервер
    return (
        <div>
            {
                cars.map((car) => <Car key={car.id} car={car} setDeleted={setDeleted} setCarForUpdate={setCarForUpdate}/>)
            }
        </div>
    );
}