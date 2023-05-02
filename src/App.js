import React from "react";

import Products from './components/ProductPage';
import PageHeader from './pages/ProductHeader';
import Basket from './Basket';

import './App.css';
import './components/ProductPage/reset.css'

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
