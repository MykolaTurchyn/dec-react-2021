import CarService from "../../services/axios.service";

export default function Car({car,car: {id, model, year, price}, setDeleted,setCarForUpdate}) {

    const deleteCar = async () => {
        const deleteUser = await CarService.deleteCarById(id);
        setDeleted(deleteUser);
    }

    return (
        <div>
            Model: {model}<br/>
            Year: {year}<br/>
            Price: {price}<br/>
            <button onClick={deleteCar}>delete</button>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <hr/>
        </div>
    );
}