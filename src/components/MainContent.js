import React from 'react';
import SquareTitle from './MainContent/SquareTitle'
import AboutUs from "./MainContent/AboutUs";
import OrderTable from "./MainContent/OrderTable"
import Warning from "./Warning";
function MainContent() {

    return(
        <main>
            <AboutUs/>
            <OrderTable/>
            <Warning/>
        </main>
    )
}

export default MainContent;