import  Container  from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import  img  from "./images/new-hero.png"
const Products = () => {
  return (
    <div>
        <h1 className="fw-bold m-3">Products For You </h1>
        <Container>
            <Row>
                <Col className="col-4">
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
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
                <Col className="col-4">
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
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
                <Col className="col-4">
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
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
                <Col className="col-4">
                    
                </Col>
                <Col className="col-4"></Col>
                <Col className="col-4"></Col>
                <Col className="col-4"></Col>
                <Col className="col-4"></Col>
                <Col className="col-4"></Col>
                <Col className="col-4"></Col>
                <Col className="col-4"></Col>
                <Col className="col-4"></Col>
                <Col className="col-4"></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Products