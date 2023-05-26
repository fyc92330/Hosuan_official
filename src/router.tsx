import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header/index'
import Home from "./page/home";

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/profile" element={<Header />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
