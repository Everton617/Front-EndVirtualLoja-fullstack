import '../css/bannerGT.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import gt1 from '../img/pgt1.png';
import gt2 from '../img/pgt2.png';
import gt3 from '../img/pgt3.png';
import gt4 from '../img/pgt4.png';

const bannerGT = () => {
    return (
        <div id='conteiner-bannergt'>
            <div className=" bannergt-feature ">
                    <div className="bannergt-area">
                        <img src={gt1} alt="" className=" img-fluid" />
                    </div>
                    <div className="bannergt-area">
                        <img src={gt2} alt="" className=" img-fluid" />
                    </div>
               
                
                    <div className="bannergt-area">
                        <img src={gt3} alt="" className=" img-fluid" />
                    </div>
                    <div className="bannergt-area">
                        <img src={gt4} alt="" className=" img-fluid" />
                </div>
            </div>
        </div>
    );
}
export default bannerGT;

