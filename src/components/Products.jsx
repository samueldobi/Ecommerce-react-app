import  Container  from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col" ;
import Card from 'react-bootstrap/Card';
import  gadgets from '../images/index.js'
import Btn from "./utilities/Btn.jsx";
import Data from "../Images.json";


const Products = () => {
  return (
    <div className="mt-5  " >
        <h1 className="fw-bold m-3 text-center hero-header">Products For You! </h1>
        <Container>
            <Row className="products-box">
              {Data.map((item) =>(
                <Col key = {item.id} className="col-12 col-md-4 p-3 g-2">
                  <Card style={{ width: 'rem' }}>
                   <Card.Img variant="top" src= {item.picture} className ="w-10"  alt = "" />  
                   <Card.Body>
                   <Card.Title>{item.title}</Card.Title>
                   <Card.Text className="">
                    {item.text}
                     </Card.Text>
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

export default Products