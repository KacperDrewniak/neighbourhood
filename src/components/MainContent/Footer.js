import React from "react"
import {Container, Row,Col} from "reactstrap"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components'




const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row>
                <Col>
                    <ul>
                        <li><h1>Kontakt</h1></li>
                        <li><FontAwesomeIcon icon={faEnvelope}/> warzywnybaron@gmail.com</li>
                        <li><FontAwesomeIcon icon={faPhone}/> 507 792 407</li>
                    </ul>
                </Col>

            </Row>

        </Container>
    )
}

export default Footer;