import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navBar.css'
import { IoPersonOutline } from "react-icons/io5";
import { SiHackthebox } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";


const Navbar = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const handleMenuClick = () => {
        setIsNavActive(!isNavActive);
    };



    return (
        <div id='conteiner-navbar' className={` ${isNavActive ? 'nav-ativa' : ''}`}>
            <nav className={isNavActive ? 'active' : ''}>
                <div class="menu-icons" onClick={handleMenuClick}>
                    <i class="fas fa-bars"></i>
                    <i class="fas fa-times"></i>
                </div>
                <div className={`container-cad ${isNavActive ? 'show' : 'hide'}`}>
                    <div className='div-cad'>
                        <div className="box-cad">
                            <IoPersonOutline />
                            <span>Bem-vindo(a) á BYtech!  
                                <span><MdArrowForwardIos /></span>

                            <br />
                                <p>Minha Conta</p>
                            </span>
                        </div>
                        <div className='box-pedidos' > <SiHackthebox /> <p>Meus Pedidos</p> </div>
                    </div>
                </div>

                <ul class="nav-list">

                    

                    <li className='general-list'>
                        <a href="#">Pcs e Notebooks </a>
                    </li>
                    <li className='general-list'>
                        <a href="#">Gamer</a>
                    </li>
                    <li className='general-list'>
                        <a href="#">
                            Hardware
                        </a>

                    </li>
                    <li className='general-list'>
                        <a href="#">Tablets</a>
                    </li>
                    <li className='general-list'>
                        <a href="#">Mídias Digitais</a>
                    </li>
                    <li className='general-list'>
                        <a href="#">Placas de vídeos</a>
                    </li>
                    <li className='general-list'>
                        <a href="#">TV</a>
                    </li>
                    <li className='general-list'>
                        <a href="#">Tablets</a>
                    </li>
                    <li className='general-list'>
                        <a href="#">Casa inteligente</a>
                    </li>
                </ul>
                <div className={`container-cad ${isNavActive ? 'show' : 'hide'}`} style={{top:500}}>
                    <div className="footer-navlink">
                        <FaMapMarkerAlt /> <a href="">Nossas Lojas</a>
                    </div>
                    <div className="footer-navlink">
                        <FiPhone /> <a href="">Central de Atendimento</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;