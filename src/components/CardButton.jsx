import React from "react"

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import styled from 'styled-components'

const Card = styled.div`
  background: ${props => props.theme.BgCard};
  margin: 0.5rem 1rem;
  border-radius: 10px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;
`
const BackgroundImage = styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`
const ImageGradient = styled.div`
  background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0) 60%);
  position:absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`
const Title = styled.div`
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #FFFFFF;
    text-transform: uppercase;
`

function CardButton({ data }) {
  try {
    var ButtonImage = data.fileImage.imageURL
  } catch (e) {
    ButtonImage = ""
  }
  return (
    <Container fluid>
      <Row className="justify-content-center"  >
        <Col md="7" lg="5" className="text-center ">
        <a href={data.link} target="_blank" rel="noreferrer">
          <Card>
            {ButtonImage ? <BackgroundImage src={ButtonImage} alt="background" /> : ""}
            {data.title ? <ImageGradient /> : ""}
            <Title>{data.title}</Title>
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