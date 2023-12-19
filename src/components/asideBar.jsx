import '../css/asideBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiCreditCard1 } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaPix } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { IoStorefrontOutline } from "react-icons/io5";
import React from 'react';
import { Carousel } from 'react-bootstrap';

function asideBar() {
    return (
        <div id="asideBar">
            <div className="conteiner-aside ">
                <div className="aside-box">

                    <CiCreditCard1 className='aside-icon' />

                    <div className='aside-text'>
                        Cartão em <br /> até <span>12x</span>
                    </div>

                </div>
                <div className="aside-box">

                    <CiDeliveryTruck className='aside-icon' />

                    <div className='aside-text'>
                        Entrega <br /><span>rápida</span>
                    </div>

                </div>
                <div className="aside-box">

                    <FaPix className='aside-icon' />

                    <div className='aside-text'>
                        Pix em <br />até <span>4x</span>
                    </div>

                </div>
                <div className="aside-box">

                    <GiReceiveMoney className='aside-icon' />

                    <div className='aside-text'>
                        Produtos com <br /><span>Cashback</span>
                    </div>

                </div>
                <div className="aside-box">

                    <IoStorefrontOutline className='aside-icon' />

                    <div className='aside-text'>
                        Compre no site e <br /><span>retire na loja</span>
                    </div>

                </div>
            </div>
            <Carousel indicators={false} controls={false} interval={2000}>
                <Carousel.Item>
                    <div className="carousel-box">

                        <CiCreditCard1 className='carousel-icon' />

                        <div className='carousel-text'>
                            Cartão em  até <span>12x</span>
                        </div>

                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-box">

                        <CiDeliveryTruck className='carousel-icon' />

                        <div className='carousel-text'>
                            Entrega <span>rápida</span>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-box">

                        <FaPix className='carousel-icon' />

                        <div className='carousel-text'>
                            Pix em até <span>4x</span>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-box">

                        <GiReceiveMoney className='carousel-icon' />

                        <div className='carousel-text'>
                            Produtos com <span>Cashback</span>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-box">

                        <IoStorefrontOutline className='carousel-icon' />

                        <div className='carousel-text'>
                            Compre no site e<span>retire na loja</span>
                        </div>

                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default asideBar;