import React from 'react';
import Logo from './Logo'
import Header from './Header'
import MainContent from "./MainContent";
import Footer from "./MainContent/Footer";
import '../styles/bootstrap.scss'
import '../styles/style.scss'

function App() {
    return (
        <>
            <Logo/>
            <Header/>
            <MainContent/>
            <Footer/>
        </>
    )
}

export default App;
