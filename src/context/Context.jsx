/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';


const Context = createContext();

const Provider = ({ children }) => {

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };
