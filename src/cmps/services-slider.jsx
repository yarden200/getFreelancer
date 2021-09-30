import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import wordpress from '../assets/img/popular-services/wordpress.jpg';
import voiceover from '../assets/img/popular-services/voiceover.jpg';
import illustration from '../assets/img/popular-services/illustration.jpg';
import videoexplainer from '../assets/img/popular-services/videoexplainer.jpg';
import logodesign from '../assets/img/popular-services/logodesign.jpg';
import dataentry from '../assets/img/popular-services/dataentry.jpg';
import animatedexplainer from '../assets/img/popular-services/animatedexplainer.jpg';
import translation from '../assets/img/popular-services/translation.jpg';
import socialmedia from '../assets/img/popular-services/socialmedia.jpg';



const ServicesCarusel = () => {
    const properties = {
        duration: 3000,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        indicators: true,
    };



    return (
        <div className="carusel-services">
            <Slide {...properties}>
                <div className="img-div first" >
                    {/* <div>
                        <h6>Customize your site</h6>
                        <h2>WordPress</h2>
                    </div> */}
                    <img src={wordpress} alt="1" />
                </div>
                <div className="img-div second" >
                    {/* <p>
                        <h6>Share your message</h6>
                        <h2>Voice Over</h2>
                    </p> */}
                    <img src={voiceover} alt="1" />
                </div>
                <div className="img-div third" >
                    {/* <p>
                        <h6></h6>
                        <h2></h2>
                    </p> */}
                    <img src={socialmedia} alt="1" />
                </div>
                <div className="img-div fourth" >
                    {/* <p>
                        <h6>Customize your site</h6>
                        <h2>WordPress</h2>
                    </p> */}
                    <img src={translation} alt="1" />
                </div>
                <div className="img-div fifth">
                    {/* <p>
                        <h6>Customize your site</h6>
                        <h2>WordPress</h2>
                    </p> */}
                    <img src={animatedexplainer} alt="1" />
                </div>
                <div className="img-div sixth" >
                    {/* <p>
                        <h6>Customize your site</h6>
                        <h2>WordPress</h2>
                    </p> */}
                    <img src={dataentry} alt="1" />
                </div>
                <div className="img-div seventh" >
                    {/* <p>
                        <h6>Customize your site</h6>
                        <h2>WordPress</h2>
                    </p> */}
                    <img src={logodesign} alt="1" />
                </div>
                <div className="img-div eighth">
                    {/* <p>
                        <h6>Customize your site</h6>
                        <h2>WordPress</h2>
                    </p> */}
                    <img src={illustration} alt="1" />
                </div>
                <div className="img-div ninth" >
                    <img src={videoexplainer} alt="1" />
                </div>
            </Slide>
        </div>
    )
}

export default ServicesCarusel;

