import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

import seo from '../assets/img/popular-services/seo.jpg';
import translation from '../assets/img/popular-services/translation.jpg';
import voiceover from '../assets/img/popular-services/voiceover.jpg';

// import a9 from '../assets/img/a9.PNG';

const GigsCarusel = () => {
    const properties = {
        duration: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        indicators: true,
        
        
    };
    return (
        <div className="gigs-carusel">
            <Slide {...properties}>
                {/* <div className="img-div">
                    <img src={a8} alt="1" style={{objectFit: "cover", maxWidth: "800px"}} />
                </div> */}
                <div className="img-div">
                    <img src={seo} alt="1" style={{maxHeight:"400px", objectFit: "cover"}}/>
                </div>
                <div className="img-div">
                    <img src={translation} alt="1" style={{maxHeight:"400px",objectFit: "cover"}}/>
                </div>
                <div className="img-div">
                    <img src={voiceover} alt="1" style={{maxHeight:"400px", objectFit: "cover"}}/>
                </div>
                {/* <div className="img-div">
                    <img src={a9} alt="1" style={{objectFit: "cover"}}/>
                </div> */}
            </Slide>
        </div>
    )
}

export default GigsCarusel;
