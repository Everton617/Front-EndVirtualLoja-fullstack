import { Component } from "react";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "../css/slideBar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';



import { dataBestSeller } from './data';



export default class SlideBar extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1230,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
      
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
            
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            
          }
        },
        
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
          }
        }
      ]
    };

    return (
      <div className="conteiner-promo">
        <h1 style={{overflowY:'hidden'}}>Melhores Promoções</h1>

        <Slider {...settings} style={{overflowY:'hidden'}}>
        {dataBestSeller.map(item => (
          <div className="card-promo" style={{ width: 380 }}>
            <div className="card-top">
              <img src={item.linkImg} className="img-fluid" alt="" />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <div className="icon-stars">
              <FontAwesomeIcon icon={faStar} style={{ color: "#dfd243" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#dfd243" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#dfd243" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#dfd243" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#dfd243" }} /> (0)
              </div>
              <p className="old-price">{item.OldPrice}</p>
              <div className="descount-price">
                <span className="bold-text">{item.price}</span> <span>à vista</span> <br />
                <span>ou</span> <span className="bold-text">10x de R$99,90</span>
              </div>
              
            </div>
          </div>
        ))}
        </Slider>
        
      </div>
    );
  }
}
