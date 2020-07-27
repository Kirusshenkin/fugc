import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export default props => {
    
    const stylesBtn = {
        display: 'flex',
        justifyContent: 'center',
        padding: '20rem 0'
    }

    return (
        <Container>
            <Row>
                <Col md={6} style={stylesBtn}>
                    <Button onClick={() => props.onChangeRows(32)} variant="success" >32 элемента</Button>
                </Col>
                <Col md={6} style={stylesBtn}>
                <Button onClick={() => props.onChangeRows(1000)} variant="primary">1000 элементов</Button>

                </Col>
            </Row>
        </Container>
    )
}