import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/main';
import { Provider } from './context/Context';

export default function AppRoutes() {

    return (
        <Provider>
            <Routes>
                <Route path="/" element={<Main />} />
                
                <Route path="*" element={'404 - Not found'} />
            </Routes>
        </Provider>
    );
}
