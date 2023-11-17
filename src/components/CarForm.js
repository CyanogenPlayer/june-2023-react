import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../redux";
import {useEffect} from "react";

const CarForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate, isLoading} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    const save = async (car) => {
        if (!carForUpdate) {
            await dispatch(carActions.create({car}))
        } else {
            await dispatch(carActions.updateById({id: carForUpdate.id, car}))
        }
        reset();
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            <input type='text' placeholder={'price'} {...register('price')}/>
            <input type='text' placeholder={'year'} {...register('year')}/>
            <button disabled={isLoading}>save</button>
        </form>
    );
};

export {
    CarForm
}