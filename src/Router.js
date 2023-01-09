import React from "react";
import {Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Home from "./pages/Home";
import Found from "./pages/Error";


function Router (){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/logement/:id" element={<Logement/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/*" element={<Found/>}/>
        </Routes>
    );
}

export default Router;