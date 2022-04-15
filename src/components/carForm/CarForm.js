import {useForm} from "react-hook-form";
import CarService from "../../services/axios.service";
import {carValidator} from "../../validators/CarValidator";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect, useState} from "react";

const CarForm = ({setNewCar, carForUpdate}) => {

    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    const [formError, setFromError] = useState({});
    useState({});
    useState({})
    useEffect(() => {
        if (carForUpdate) {
            const { model, year, price} = carForUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [carForUpdate])


    const mySubmit = async (car) => {
        try {
            if(carForUpdate){
            const {data} = await CarService.updateCarById(carForUpdate.id,car);
            setNewCar(data)
            reset()
            }
            else
            {
                const {data} = await CarService.createCar(car);
                setNewCar(data)
                reset()
            }
        } catch (e) {
            setFromError(e.response.data);
            console.log(formError)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(mySubmit)}>
                <div><label>Model: <input type="text" {...register("model")}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                <div><label>Year: <input type="number" {...register("year", {valueAsNumber: true})}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                {/*{formError.model && <span>{formError.year[0]}</span>}*/}
                <div><label>Price: <input type="number"{...register("price", {valueAsNumber: true})}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                {/*{formError.model && <span>{formError.price[0]}</span>}*/}
                <br/>
                <button>save</button>
            </form>
        </div>
    );
}
export {CarForm}