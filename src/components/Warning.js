import React from "react"
import styled from 'styled-components'

const Warn = styled.div`
    text-align:center;
   padding:30px;
   margin:30px;
   
`

const Warning = () => {
    return (
        <>
            <Warn>
                <h1>Uwaga!</h1>
                <p>Darmowa dostawa na terenie Bielska-Białej od zamówienia o wartości 50zł.</p>
            </Warn>

        </>
    )
}


export default Warning