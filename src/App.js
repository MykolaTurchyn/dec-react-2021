import {CarForm} from "./components/carForm/CarForm";
import Cars from "./components/cars/Cars";
import {useState} from "react";

export default function App() {
    const [newCar, setNewCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    return (
        <div>
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars newCar={newCar} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
}