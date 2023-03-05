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
    < div className='d-flex justify-content-between m-5'>
      
            <Col className='col-8'>
            <Swiper
      spaceBetween={10}
      slidesPerView={5.5}
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
      <SwiperSlide> <Button className="link-btn">Headsets</Button></SwiperSlide>
      ...
    </Swiper>
    </Col>
     <Col className='col-3 justify-content-end'>
     <Button className="link-btn">Sort By </Button>
     </Col>
     
    </div>
   
  )
}

export default Links