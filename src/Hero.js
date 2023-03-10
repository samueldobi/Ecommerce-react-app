import  Container  from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"
import  img  from "./images/new-hero.png"
import Button from 'react-bootstrap/Button';

const Hero = () => {
  return (
    <div className=" hero-section ">
       <Container>
       <Row className = "flex-column flex-md-row">
        <Col className="col ">
          <div className=" m-3">
          <p className="fs-1 fw-bold hero-header ">Grab up to 50% off on your first purchase</p>
          <Button className="hero-btn ">Buy Now</Button>  
          </div>
        </Col> 
        <Col className=" col  hero-img ">
          <img src={img} className="object-fit-contain" alt=""/>
        </Col>
      </Row>
       </Container>
    </div>
  )
}

export default Hero

