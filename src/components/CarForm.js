import {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../services";
import {carValidator} from "../validators";
import {carActions} from "../redux";

const CarForm = () => {
    const {register, reset, handleSubmit, formState: {isValid, errors}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate, setValue]);

    const save = async (car) => {
        if (!carForUpdate) {
            await carService.create(car);
        } else {
            await carService.updateById(carForUpdate.id, car);
            dispatch(carActions.setCarForUpdate(null));
        }
        dispatch(carActions.trigger());
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button disabled={!isValid}>Save</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {
    CarForm
};