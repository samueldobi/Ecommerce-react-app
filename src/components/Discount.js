import  Container  from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"
import  gadgets from '../images/index.js'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React from 'react'

const Discount = () => {
  return (
    <Container className="Discount">
        <p className="discount-header fw-bold fs-2">Get Discounts From These Products</p>
        <Row className=" mb-4 col-12 justify-content-between">
            <div className="discount-div col-4 m-3">
            <Card style={{ width: '403px', background:'#000' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Card.Img variant="top" src={gadgets.gadget6} fluid/>
                </Card>
            </div>
            <div className="discount-div col-4">
            <Card style={{ width: '403px', background:'#000' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Card.Img variant="top" src={gadgets.gadget6} fluid/>
                </Card>
            </div>
        </Row>
    </Container>
  )
}

export default Discount