import React from "react"

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import styled from 'styled-components'

import logo from "../assets/images/logo-wansite-light.svg"

const Logo = styled.img`
  padding:0.5rem;
  max-width: 70px;
  margin: 1rem;
`

function Brand() {
    return <Container fluid>
            <Row noGutters>
                <Col xs={12} className="text-center">
                    <a href="https://wansite.co" target="_blank" rel="noreferrer">
                        <Logo src={logo} alt="wansite logo" />
                    </a>
                </Col>
            </Row>
        </Container> 
}

export default Brand 