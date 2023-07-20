import  Container  from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"
import  img  from "./images/new-hero.png"
import Button from 'react-bootstrap/Button';

const Hero = () => {
  return (
    <div className=" hero-section mb-5 ">
       <Container>
       <Row className = "">
        <Col className="col-12 col-md-6 ">
          <div className=" p-3">
          <p className="fs-1 fw-bold hero-header ">Grab up to 50% off on your first purchase</p>
          <Button className="hero-btn ">Buy Now</Button>  
          </div>
        </Col> 
        <Col className=" col-12 col-md-6  hero-img ">
          <img src={img} className="object-fit-contain" alt=""/>
        </Col>
      </Row>
       </Container>
    </div>
  )
}

export default Hero

