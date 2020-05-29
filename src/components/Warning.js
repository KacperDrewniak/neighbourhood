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
                <p>Darmowa dostawa na terenie Bielska-Białej od zamówienia o wartości 150zł.</p>
            </Warn>
            <Warn>
                <h1>W razie chęci negocjaji prosimy o kontakt mailowy</h1>
            </Warn>
        </>
    )
}


export default Warning