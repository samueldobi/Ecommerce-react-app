import  Container  from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"
import  gadgets from '../images/index.js'

const Popular = () => {
  return (
    <div className="">
        <Container className="popular">
                <p className="fs-2 fw-bold">Popular Products</p>
                <Row className=" col-12"> 
                    <div className="col-12 col-lg-6 d-flex">
                      <div className="popular-img">
                        <img src={gadgets.gadget1} alt="" className="img-fluid " />
                      </div>
                      <div className="popular-text">
                        Product name
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex">
                    <div className="popular-img">
                        <img src={gadgets.gadget1} alt="" className="img-fluid " />
                      </div>
                      <div className="popular-text">
                        Product name
                      </div>
                    </div>
                </Row>
                <Row className=" col-12"> 
                    <div className="col-12 col-lg-6 d-flex">
                      <div className="popular-img">
                        <img src={gadgets.gadget1} alt="" className="img-fluid " />
                      </div>
                      <div className="popular-text">
                        Product name
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex">
                    <div className="popular-img">
                        <img src={gadgets.gadget1} alt="" className="img-fluid " />
                      </div>
                      <div className="popular-text">
                        Product name
                      </div>
                    </div>
                </Row>
                <Row className=" col-12"> 
                    <div className="col-12 col-lg-6 d-flex">
                      <div className="popular-img">
                        <img src={gadgets.gadget1} alt="" className="img-fluid " />
                      </div>
                      <div className="popular-text">
                        Product name
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex">
                    <div className="popular-img">
                        <img src={gadgets.gadget1} alt="" className="img-fluid " />
                      </div>
                      <div className="popular-text">
                        Product name
                      </div>
                    </div>
                </Row>
              
        </Container>
    </div>
  )
}

export default Popular