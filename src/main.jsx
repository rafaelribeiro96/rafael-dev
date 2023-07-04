import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './context/Context';
import { HelmetProvider } from 'react-helmet-async';


const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <HelmetProvider>
                <Provider>
                    <MainRoutes />
                </Provider>
            </HelmetProvider>
        </BrowserRouter>
    </React.StrictMode>
);
