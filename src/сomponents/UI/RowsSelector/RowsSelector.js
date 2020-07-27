import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export default props => {
    
    const stylesBtn = {
        display: 'flex',
        justifyContent: 'center',
        padding: '20rem 0'
    }

    // const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    // const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    // block={true}
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