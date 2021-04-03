import React from "react"
import { Col, Row, Container } from 'react-bootstrap'

import Title from "./Title"
import GridTitle from "./GridTitle"
import GridSubtitle from "./GridSubtitle"
import GridImage from "./GridImage"

function GridColumn({ data }) {
    return (
        <Container className="py-5">
            <Row>
                <Title data={data.title} />
                {data.list ? data.list.map((key, index) =>
                    <Col xs={12} md={6} lg={4} className="mb-5" key={index}>
                        {key.fileImage ?
                            <a href={key.url} target="_blank" rel="noopener noreferrer">
                                <GridImage data={key.fileImage.imageURL} />
                            </a> : ""}
                        {key.name ? <GridTitle>
                            <a className="mb-3" href={key.url} target="_blank" rel="noopener noreferrer">
                                {key.name}
                            </a>
                        </GridTitle> : ""}
                        {key.subtitle ? <GridSubtitle>
                            <a href={key.url} target="_blank" rel="noopener noreferrer">
                                {key.subtitle}
                            </a>
                        </GridSubtitle> : ""}
                    </Col>
                ) : ""}
            </Row>
        </Container>
    )
}

export default GridColumn