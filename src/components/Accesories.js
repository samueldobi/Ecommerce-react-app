import React from 'react';
import  Container  from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col" ;
import Card from 'react-bootstrap/Card'
import Data from "../Accesories.json";
import Counter from './utilities/Counter.js';
import Btn from './utilities/Btn.js';

const Accesories = () => {
  return (
    <div>
      <h1 className='text-center fw-bold m-3 '>Accesories</h1>
      <Container>
            <Row className="products-box">
              {Data.map((item)=>(
                <Col key={item.id}  className="col-12 col-md-4 p-3 g-2  mb-4">
                <Card style={{ width: 'rem' }}>
                  <Card.Img variant="top" src={item.picture} className ="w-10 acc-img"  alt = "" />  
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

export default Accesories