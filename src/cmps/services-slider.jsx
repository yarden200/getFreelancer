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
import socialmedia from '../assets/img/popular-services/socialmedia.jpg';
import videoexplainer from '../assets/img/popular-services/videoexplainer.jpg';
import logodesign from '../assets/img/popular-services/logodesign.jpg';
import dataentry from '../assets/img/popular-services/dataentry.jpg';
import informationsecurity from '../assets/img/popular-services/informationsecurity.jpg';
import translation from '../assets/img/popular-services/translation.jpg';



    const ServicesCarusel = () => {
        const properties = {
            duration: 3000,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: false,
            indicators: true,
        };

        

            return (
                <div className="carusel-services">
                    <Slide {...properties}>
                        <div>
                            <img src={wordpress} alt="1" />
                        </div>
                        <div>
                            <img src={voiceover} alt="1" />
                        </div>
                        <div>
                            <img src={translation} alt="1" />
                        </div>
                        <div>
                            <img src={socialmedia} alt="1" />
                        </div>
                        <div>
                            <img src={dataentry} alt="1" />
                        </div>
                        <div>
                            <img src={logodesign} alt="1" />
                        </div>
                        <div>
                            <img src={informationsecurity} alt="1" />
                        </div>
                        <div>
                            <img src={videoexplainer} alt="1" />
                        </div>
                    </Slide>
                </div>
            )
        }
    
    export default ServicesCarusel;

