import React from "react"

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import styled from 'styled-components'

const Card = styled.div`
    background: ${props => props.theme.BgCard};
    padding: 0.5rem 1rem;
    margin: 0.5rem 1rem;
    border-radius: 10px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 55px;
`
const Title = styled.div`
    font-weight: 500;
    font-size: 0.9rem;
    color: ${props => props.theme.TitleColor};
    text-transform: uppercase;
`
const Description = styled.div`
    font-weight: 400;
    font-size: 0.8rem;
    color: ${props => props.theme.SubtitleColor};
`
const Icon = styled.i`
    color: ${props => props.theme.TitleColor};
`

function CardButton({ data }) {
  return (
    <Container fluid>
      <Row className="justify-content-center" noGutters>
        <Col md="7" lg="5" className="text-center ">
        <a href={data.link} target="_blank" rel="noreferrer">
          <Card>
          <Icon className={data.icon}></Icon>
          <span>
            <Title>{data.title}</Title>
            <Description>{data.description}</Description>
            </span>
            <Icon className="fas fa-chevron-right"></Icon>
          </Card>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

CardButton.defaultProps = {
  data: {
    title: "",
    description: ""
  }
}

export default CardButton 