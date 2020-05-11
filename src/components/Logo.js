import React from 'react';
import logo from "./../../src/images/logo.png"

function Logo() {
    return (
        <div className="logo">
            <div style={{position:"relative",backgroundColor:"white"}}>
                <img src={logo}/>
            </div>
        </div>
    )
}

export default Logo;
