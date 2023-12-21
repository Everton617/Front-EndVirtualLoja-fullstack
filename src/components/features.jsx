import '../css/features.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import feature1 from '../img/feature1.png';
import feature2 from '../img/feature2.png';
import feature3 from '../img/feature3.png';
import feature4 from '../img/feature4.png';
import feature5 from '../img/feature5.png';
import feature6 from '../img/feature6.png';
import feature7 from '../img/feature7.png';
import feature8 from '../img/feature8.png';
import feature9 from '../img/feature9.png';

const features = () => {
    return (

        <div id="features">
            <h1>Aqui tem tudo que você precisa_</h1>
            <div className='need-products'>
                <div className="box-needproducts">
                    <img src={feature1} className='img-fluid' alt="" />

                </div>
                <div className="box-needproducts">
                    <img src={feature2} className='' alt="" />

                </div>
                <div className="box-needproducts">
                    <img src={feature3} className='' alt="" />

                </div>
                <div className="box-needproducts">
                    <img src={feature4} className='' alt="" />

                </div>
                <div className="box-needproducts">
                    <img src={feature5} className='' alt="" />

                </div>
                <div className="box-needproducts">
                    <img src={feature6} className='' alt="" />

                </div>
                <div className="box-needproducts">
                    <img src={feature7} className='' alt="" />

                </div>
                <div className="box-needproducts">
                    <img src={feature8} className='' alt="" />

                </div>
                <div className="box-needproducts">
                    <img src={feature9} className='' alt="" />
                </div>
            </div>
        </div>


    );
}
export default features;