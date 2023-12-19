import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../img/img1.png';
import img2 from '../img/imgr2.png';
import img3 from '../img/imgr3.jpg';
import banner from '../img/banner1.jpg'
import '../css/carrossel.css'

const Carrossel = () => {
  return (


    <div id='conteiner-promo'>
      <div className="containerimg-900px">
        <img src={banner} alt="" className='img-fluid'/>
      </div>
      <div className='conteiner-carousel'>
        <Carousel indicators={false}  interval={2000}>
          <Carousel.Item>
            <div className='box-img'>
              <img
                className="d-block w-100 img-fluid"
                src={img1}
                alt="Primeiro slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className='box-img'>
              <img
                className="d-block w-100 img-fluid"
                src={img2}
                alt="Segundo slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='box-img'>
              <img
                className="d-block w-100 img-fluid"
                src={img3}
                alt="Terceiro slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}
export default Carrossel;