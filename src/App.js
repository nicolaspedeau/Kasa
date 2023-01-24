import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Router from "./Router"


function App () {
    return(
        <main>
            <Header/>
            <Router/>
            <Footer/>
        </main>
    )
}

export default App;