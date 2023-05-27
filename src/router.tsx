import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header/index'
import Home from "./page/home";
import Location from "./page/location";
import Rent from "./page/rent";
import Partner from "./page/partner";
import Contact from "./page/contact";


const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/location" element={<Location />}/>
                <Route path="/rent" element={<Rent />}/>
                <Route path="/partner" element={<Partner />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
