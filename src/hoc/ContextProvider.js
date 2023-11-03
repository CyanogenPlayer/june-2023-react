import React, {createContext} from 'react';

const Context = createContext(null);

const ContextProvider = ({children}) => {
    return (
        <div>
            <Context.Provider value={'ahhaahhaah'}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {
    ContextProvider,
    Context
}