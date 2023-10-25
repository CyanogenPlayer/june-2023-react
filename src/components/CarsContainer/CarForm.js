import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/carService";

import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {register, reset, handleSubmit, formState: {isValid, errors}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate]);

    const save = async (car) => {
        if (!carForUpdate) {
            await carService.create(car);
        }
        else {
            await carService.updateById(carForUpdate.id, car);
            setCarForUpdate(null);
        }
        setTrigger(prev => !prev);
        reset();
    }

    return (
        <>
            {/*<form onSubmit={handleSubmit(save)}>*/}
            {/*    <input type="text" placeholder={'brand'} {...register('brand', {*/}
            {/*        // minLength: {value:1, message: 'Min 1 character'},*/}
            {/*        // maxLength: {value:20, message: 'Max 20 characters'}*/}
            {/*        pattern: {value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/, message: 'min 1 max 20 ch'}*/}
            {/*    })}/>*/}
            {/*    <input type="text" placeholder={'price'} {...register('price', {*/}
            {/*        min: {value: 0, message: 'Min 0'},*/}
            {/*        max: {value: 1_000_000, message: 'Max 1 000 000'},*/}
            {/*        valueAsNumber: true*/}
            {/*    })}/>*/}
            {/*    <input type="text" placeholder={'year'} {...register('year', {*/}
            {/*        min: {value: 1990, message: 'Min 1990'},*/}
            {/*        max: {value: new Date().getFullYear(), message: 'Max current year'},*/}
            {/*        valueAsNumber: true*/}
            {/*    })}/>*/}
            {/*    <button disabled={!isValid}>Save</button>*/}
            {/*</form>*/}
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

export default CarForm;