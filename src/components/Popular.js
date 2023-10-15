import  Container  from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"
// import Col  from "react-bootstrap/Col"
import  gadgets from '../images/index.js'

const Popular = () => {
  return (
    <div className="">
        <Container className="popular mt-5 mb-5 p-5">
                <p className="fs-2 fw-bold text-center hero-header ">Popular Products</p>
                <Row className=" col-12 p-3 d-flex justify-content-between"> 
                    <div className="col-12 col-lg-5 d-flex product-box p-3 my-4">
                      <div className="popular-img col-4">
                        <img src={gadgets.gadget1} alt="" className="img-fluid " />
                      </div>
                      <div className="popular-text p-3 ">
                       <p className="fs-4 fw-bold">Product </p>
                       <p className="fs-6 product-details">Product Details </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5 d-flex product-box p-3 my-4 ">
                    <div className="popular-img col-4">
                        <img src={gadgets.gadget2} alt="" className="img-fluid " />
                      </div>
                      <div className="popular-text  p-3 ">
                       <p className="fs-4 fw-bold">Product </p>
                       <p className="fs-6 product-details">Product Details </p>
                      </div>
                    </div>
                </Row>
                <Row className=" col-12 p-3 d-flex justify-content-between"> 
                    <div className="col-12 col-lg-5 d-flex product-box p-3 my-4">
                      <div className="popular-img col-4">
                        <img src={gadgets.gadget1} alt="" className="img-fluid " />
                      </div>
                      <div className="popular-text  p-3 ">
                       <p className="fs-4 fw-bold">Product </p>
                       <p className="fs-6 product-details">Product Details </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5 d-flex product-box p-3 my-4 ">
                    <div className="popular-img col-4">
                        <img src={gadgets.gadget2} alt="" className="img-fluid " />
                      </div>
                      <div className="popular-text  p-3 ">
                       <p className="fs-4 fw-bold">Product </p>
                       <p className="fs-6 product-details">Product Details </p>
                      </div>
                    </div>
                </Row>
                <Row className=" col-12 p-3 d-flex justify-content-between"> 
                    <div className="col-12 col-lg-5 d-flex product-box p-3 my-4">
                      <div className="popular-img col-4">
                        <img src={gadgets.gadget1} alt="" className="img-fluid " />
                      </div>
                      <div className="popular-text  p-3 ">
                       <p className="fs-4 fw-bold">Product </p>
                       <p className="fs-6 product-details">Product Details </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5 d-flex product-box p-3 my-4 ">
                    <div className="popular-img col-4">
                        <img src={gadgets.gadget2} alt="" className="img-fluid " />
                      </div>
                      <div className="popular-text  p-3 ">
                       <p className="fs-4 fw-bold">Product </p>
                       <p className="fs-6 product-details">Product Details </p>
                      </div>
                    </div>
                </Row>
              
             

              
        </Container>
    </div>
  )
}

export default Popular