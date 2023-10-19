import  Container  from "react-bootstrap/Container";
// import Row  from "react-bootstrap/Row";
// import Col  from "react-bootstrap/Col";
import Data from './PopularProduct.json';

const Popular = () => {
  return (
    <div className="">
        <Container className="popular mt-5 mb-5 p-5">
                <p className="fs-2 fw-bold text-center hero-header ">Popular Products</p>
               <div className="popular-row">
                 {Data.map((item) =>(
                  < div className=" mb-5" key={item.id}> 
              
                  <div className="d-flex ">
                  <div className="popular-img ">
                        <img src={item.picture} alt="" className="img-fluid " />
                      </div>
                      <div className="popular-text p-3  ">
                       <p className="fs-4 fw-bold">{item.title} </p>
                       <p className="fs-6 product-details">{item.text} </p>
                      </div>
                  </div>
                  </div>

                 ))}
                 </div>

        </Container>
    </div>
  )
}

export default Popular
