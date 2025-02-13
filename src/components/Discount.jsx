import  Container  from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card';
import Data from "./Discountdata.json";

const Discount = () => {
  return (
    <div className='discount' >
      <Container className=''>
          <Row className='discount'>
       
                    {Data.map((item) => (
                      <Col key = {item.id} className='discount-box p-3'>
                          <Card.Title className='fw-bold fs-4'>
                            {item.title}
                            </Card.Title>
                        <Card.Text>
                        {item.text}
                        </Card.Text>
                        <img src = {item.picture} className='discount-img img-fluid' alt="" />
                        </Col>
                  ))}
                   
                    {/* <Button variant="primary">Go somewhere</Button> */}
             
                  </Row>
                </Container>
  
    </div>
  );
}
export default Discount