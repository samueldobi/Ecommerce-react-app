import React from 'react';
import  Container  from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col" ;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  gadgets from '../images/index.js';
import Data from '../Phones.json';
import Btn from './utilities/Btn.js';
import Counter from './utilities/Counter.js';

const Phones = () => {
  return (
    <div className='mt-5'>
        <h1 className='text-center'>Check out our Phones</h1>
        <Container>
            <Row className="products-box">
            {Data.map((item)=>(
              <Col key = {item.id} className="col-12 col-md-4 p-3 g-2  mb-4">
             
                    <Card style={{ width: 'rem' }}>
                      <Card.Img variant="top" src={item.picture} className ="img-fluid phone-img"  alt = "" />  
                      <Card.Body>
                        <Card.Title>{item.text}</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Counter/>
                        <Btn/>
                      </Card.Body>
                  </Card>
                </Col>
                ))}

              

               
            </Row>
        </Container>
    </div>
  )
}


export default Phones