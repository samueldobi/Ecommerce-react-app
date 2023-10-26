import React, { useRef, useState } from 'react';
import  Container  from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"
import  gadgets from '../images/index.js'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Data from "./Discountdata.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

// import required modules
// import { Pagination } from 'swiper/modules';

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
                        <img src = {item.picture} className='discount-img img-fluid'  />
                        </Col>
                  ))}
                   
                    {/* <Button variant="primary">Go somewhere</Button> */}
             
                  </Row>
                </Container>
  
    </div>
  );
}
export default Discount