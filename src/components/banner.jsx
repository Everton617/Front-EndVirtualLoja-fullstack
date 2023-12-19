import '../css/banner.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from '../img/mosaico1.png';
import banner2 from '../img/mosaico2.png';
import banner3 from '../img/mosaico3.png';
import banner4 from '../img/mosaico4.png';

const Banner = () => {
    return (
        <div id='conteiner-banner'>
            <div className=" banner-feature ">
                    <div className="banner-area">
                        <img src={banner1} alt="" className="img-banner img-fluid" />
                    </div>
                    <div className="banner-area">
                        <img src={banner2} alt="" className="img-banner img-fluid" />
                    </div>
               
                
                    <div className="banner-area">
                        <img src={banner3} alt="" className="img-banner img-fluid" />
                    </div>
                    <div className="banner-area">
                        <img src={banner4} alt="" className="img-banner img-fluid" />
                </div>
            </div>
        </div>
    );
}
export default Banner;