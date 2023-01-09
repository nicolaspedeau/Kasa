import React from "react";
import Header from "./components/Header"
// import Footer from "./components/Footer"
import Router from "./Router"
import './styles/app.scss'

function App () {
    return(
        <main>
            <Header/>
            <Router/>
        </main>
    )
}

export default App;