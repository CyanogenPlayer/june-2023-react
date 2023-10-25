import React from 'react';
import Car from "./Car";

const Cars = ({cars, setCarForUpdate}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;