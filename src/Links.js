import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
//import button
import Button from 'react-bootstrap/Button';
import  Container  from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"


const Links = () => {
  return (
    <Container className='m-5'>
        <Row>
            <Col className='col-9'>
            <Swiper
      spaceBetween={10}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> <Button className="link-btn">Headsets</Button></SwiperSlide>
      <SwiperSlide> <Button className="link-btn">Headsets</Button></SwiperSlide>
      <SwiperSlide> <Button className="link-btn">Headsets</Button></SwiperSlide>
      <SwiperSlide> <Button className="link-btn">Headsets</Button></SwiperSlide>
      <SwiperSlide> <Button className="link-btn">Headsets</Button></SwiperSlide>
      <SwiperSlide> <Button className="link-btn">Headsets</Button></SwiperSlide>
      <SwiperSlide> <Button className="link-btn">Headsets</Button></SwiperSlide>
      ...
    </Swiper>
    </Col>
     <Col className='col-3'>
        kk
     </Col>
        </Row>
    </Container>
   
  )
}

export default Links