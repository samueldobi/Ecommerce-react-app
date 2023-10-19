import  Container  from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col" ;
import Card from 'react-bootstrap/Card';
import  gadgets from '../images/index.js'
import Btn from "./utilities/Btn.js";
import Data from "../Images.json";


const Products = () => {
  return (
    <div className="mt-5  " >
        <h1 className="fw-bold m-3 text-center hero-header">Products For You! </h1>
        <Container>
            <Row className="products-box">
              {Data.map((item) =>(
                <Col key = {item.id} className="col-12 col-md-4 p-3 g-2">
                   <Card.Title>{item.title}</Card.Title>
                </Col>
              ))}



              <Col className="col-12 col-md-4 p-3 g-2  mb-4">
                    <Card style={{ width: 'rem' }}>
                      <Card.Img variant="top" src={gadgets.gadget1} className ="w-10"  alt = "" />  
                      <Card.Body>
                        <Card.Title>Card Title gg</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Btn />
                      </Card.Body>
                  </Card>
                </Col>

                <Col className="col-12 col-md-4 p-3 g-2">
                 <Card style={{ width: 'rem' }}>
                    <Card.Img variant="top" src={gadgets.gadget2} className ="w-10"  alt = ""  />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Btn />
                    </Card.Body>
                 </Card>
                </Col>

                <Col className="col-12 col-md-4 p-3 g-2">
                  <Card style={{ width: 'rem' }}>
                    <Card.Img variant="top"  src={gadgets.gadget3} className ="w-10"  alt = ""   />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Btn />
                    </Card.Body>
                 </Card>

                </Col>

                <Col className="col-12 col-md-4 p-3 g-2">
                  <Card style={{ width: 'rem' }}>
                      <Card.Img variant="top"  src={gadgets.gadget4} className ="w-10"  alt = ""   />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Btn />
                      </Card.Body>
                   </Card>
                </Col> 

                <Col className="col-12 col-md-4 p-3 g-2">
                  <Card style={{ width: 'rem' }}>
                      <Card.Img variant="top"  src={gadgets.gadget8} className ="w-10"  alt = ""   />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Btn />
                      </Card.Body>
                   </Card>
                </Col> 

                <Col className="col-12 col-md-4 p-3 g-2">
                  <Card style={{ width: 'rem' }}>
                      <Card.Img variant="top"  src={gadgets.gadget11} className ="w-10"  alt = ""   />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Btn />
                      </Card.Body>
                   </Card>
                </Col> 

               
               
            </Row>
        </Container>
    </div>
  )
}

export default Products