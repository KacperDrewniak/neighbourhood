import React from 'react';
import styled from 'styled-components'

const Banner = styled.div`
    position:relative;
    display:flex
    flex-direction:column;
    height:400px;
    margin:0 auto;
    color:white;
    font-weight:bolder;
    font-size:2rem;
    text-align:center;
`

const ContentOfBanner = styled.div`
    display:flex;
    height:100%;
`

const Image = styled.div`
    background:url(https://apollo-ireland.akamaized.net/v1/files/84aerkvpvxdp3-PL/image;s=1000x700) no-repeat center;
    flex-basis:40%;
    height:100%;
    background-size:cover;
`

const Text = styled.div`
            display:flex;
           z-index:100;
           color:white;
           text-align:left;
           width:100%;
           padding:20px;
           background-color:#212529;
`



function AboutUs() {
    return (
        <Banner>
            <ContentOfBanner>
                <Image/>
                <Text><p style={{display:'inline-block',margin:"auto"}}>Jesteśmy firmą z 30 letnią tradycją, oferujemy wysokiej jakości naturalne produkty. W ostatnim
                    czasie postanowiliśmy przenieść część naszej sprzedaży do internetu.</p></Text>
            </ContentOfBanner>
        </Banner>
    )
}

export default AboutUs;
