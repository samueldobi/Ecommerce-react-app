import  Container  from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col" 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  gadgets from './images/index.js'
// import  img  from "./images/products/gadget-1.jpg"
// import  img2  from "./images/products/gadget-2.jpg"
// import  img3  from "./images/products/gadget-3.jpg"
const Products = () => {
  return (
    <div>
        <h1 className="fw-bold m-3 text-center">Products For You! </h1>
        <Container>
            <Row className="products-box">
                <Col className="col-12 col-md-4 p-3 g-2">
                <Card style={{ width: 'rem' }}>
      <Card.Img variant="top" src={gadgets.gadget1} className ="w-10"  alt = "" />  
      <Card.Body>
        <Card.Title>Card Title gg</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </Col>
                <Col className="col-12 col-md-4 p-3 g-2">
                <Card style={{ width: 'rem' }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </Col>
                <Col className="col-12 col-md-4 p-3 g-2">
                <Card style={{ width: 'rem' }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </Col> 

               
               
            </Row>
        </Container>
    </div>
  )
}

export default Products