import React from "react";

import Products from './components/ProductPage';
import PageHeader from './pages/PageHeader';
import Basket from './pages/Basket';

import './App.css';
import './css/reset.css'

function App() {
    return (
        <>
            <PageHeader/>
            {/*<Products/>*/}
            <Basket/>
        </>
);
}

export default App;
