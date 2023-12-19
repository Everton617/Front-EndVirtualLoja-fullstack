import '../css/topBar.css';
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import whatsap from "../icon/whatsapp.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Navbar from './navBar';




function topBar() {
    return (
        <div>
            <div id="container">
                <div className="contatos-area">
                    <div className='contact-left'>
                        <a href="">
                            <i class="fa-solid fa-location-pin"></i>
                            Nossas Lojas
                        </a>
                        <a href="">
                            Atendimento: <i class="fa-solid fa-phone"></i> (85) 4020-5000
                        </a>
                    </div>
                    <div className='contact-right'>
                        <a href="">
                            <i class="fa-brands fa-whatsapp"></i>
                            Compre pelo WhatsApp
                        </a>
                        <a href="">
                            <i class="fa-solid fa-cube"></i>
                            Meus Pedidos
                        </a>
                    </div>
                </div>

                <div className="topBar">
                    <div className='conteiner-title col-lg-8 col-md-7'>
                        <div className='area-title '>
                            <div className='title-box'>

                                <h1>BITech</h1>

                            </div>
                            <div className="respon-mobile">
                                <img src={whatsap} alt="" />
                                <IoIosHeartEmpty />
                                <GrCart />
                            </div>
                            
                        <div className="conteiner-lg-searchbar">
                            <CiSearch className="search-icon" />
                            <input className='search-bar' type="text" placeholder='O que você procura?' />
                        </div>


                        </div>
                        <div className="conteiner-searchbar"><CiSearch className="search-icon" />
                            <input className='search-bar' type="text" placeholder='O que você procura?' />
                        </div>

                    </div>

                    <div id="conteiner-cadastro " className='col-lg-4 col-md-5'>
                        <div className="cadastro-area ">
                            <IoPersonOutline className="icon-person" />
                            <span className='span-login'>Olá, faça o login ou, cadastra-se!</span>
                            <IoIosHeartEmpty className="icon-cad" />
                            <span className='span-cart'>
                                <GrCart className="icon-cart" />  <div className="contador">0</div>
                            </span>
                        </div>
                    </div>


                </div>

            </div>
            <div className='nav-area'>
                <Navbar />
            </div>
        </div>

    );
}

export default topBar;