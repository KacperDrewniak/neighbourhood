import React from 'react';
import styled from 'styled-components'


function SquareTitle(props) {

    const text = props.text;
    const color = props.color;

    const BoxTitle = styled.div`
           display:flex;
           align-items: center;
           padding:20px;
    `
    const Square = styled.div`
            height:50px;
            width:50px;
            background-color:red;
            display:flex;
            margin:10px;
    `
    const Title = styled.div`
            font-size:3rem;
    `

    return (
        <BoxTitle>
            <Square style={{backgroundColor: `${color}`}}/>
            <Title>{text}</Title>
        </BoxTitle>
    )
}

export default SquareTitle;