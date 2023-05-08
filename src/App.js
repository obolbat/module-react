import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Products from './pages/ProductPage';
import Basket from './pages/BasketPage';

import './App.css';
import './css/reset.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Products/>
    },
    {
        path: "/cart",
        element: <Basket/>
    }
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
