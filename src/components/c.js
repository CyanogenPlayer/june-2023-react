import React from 'react';
import {useAppContext} from "../hooks/useAppContext";

const C = () => {
    // const value = useContext(Context);
    const value = useAppContext();

    return (
        <div>
            c: {value}
        </div>
    );
};

export default C;