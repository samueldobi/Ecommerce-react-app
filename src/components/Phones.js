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
        <h1 className='text-center m-3'>Check out our Phones</h1>
        <Container>
            <Row className="products-box">
            {Data.map((item)=>(
              <Col key = {item.id} className="col-12 col-md-4 p-3 g-2  mb-4 ">
             
                    <Card style={{ width: 'rem' }}>
                      <Card.Img variant="top" src={item.picture} className ="img-fluid phone-img"  alt = "" />  
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                          {item.text}
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