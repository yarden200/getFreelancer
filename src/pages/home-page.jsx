import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import ServicesCarusel from '../cmps/services-slider.jsx'
import { loadGigs, onSetFilter } from '../store/gig.actions.js'
import { GigList } from '../cmps/gig-list.jsx'
import { HomeHero } from '../cmps/home-hero.jsx'
import r32 from '../assets/img/r32.PNG';
import { FaRegCheckCircle } from 'react-icons/fa';
import business from '../assets/img/business.jpg';
import data from '../assets/img/data.jpg';
import digital from '../assets/img/digital.jpg';
import lifestyle from '../assets/img/lifestyle.jpg';
import music from '../assets/img/music.jpg';
import video from '../assets/img/video.jpg';
import writing from '../assets/img/writing.jpg';


// import a9 from '../assets/img/a9.PNG';
// import a8 from '../assets/img/a8.PNG';
// import a7 from '../assets/img/a7.PNG';
// import a4 from '../assets/img/a4.PNG';
// import a5 from '../assets/img/a5.PNG';
// import logo from '../assets/img/logo.png'

class _HomePage extends React.Component {

    state = {
        gigs: []
    }

    componentDidMount() {
        const gigs = this.props.loadGigs()
        // console.log(gigs)
        this.setState({ gigs })
    }

    render() {
        const { gigs } = this.props
        const { history } = this.props
        // console.log(gigs)

        return (
            <section className="home-page ">
                <HomeHero history={history} />
                {/* <div className="cards-container main-container card-grid">
                    <div className="cards-container card-grid"> */}
                <div className="main-container">
                    {/* <div className="cards-container card-grid">
                        <GigList
                            gigs={gigs}
                        />
                    </div> */}
                    <h1 style={{fontFamily:"font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;", fontSize: "xx-large", margin: "20px"}}>Popular professional services</h1>
                    <div className="popular-services">
                        <ServicesCarusel />
                    </div>
                </div>
                <div className="home-selling-container">
                    <div className="main-container">
                        <div className="home-selling flex align-center">
                            <div className="home-selling-content">
                                <h2>A whole world of freelance talent at your fingertips</h2>
                                <ul>
                                    <li>
                                        <h4 className="flex"><span><FaRegCheckCircle color="grey" size="22px" /></span>The best for every budget</h4>
                                        <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                                    </li>
                                    <li>
                                        <h4 className="flex"><span><FaRegCheckCircle color="grey" size="22px" /></span>Quality work done quickly</h4>
                                        <p>Find the right freelancer to begin working on your project within minutes.</p>
                                    </li>
                                    <li>
                                        <h4 className="flex"><span><FaRegCheckCircle color="grey" size="22px" /></span>Protected payments, every time</h4>
                                        <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                                    </li>
                                    <li>
                                        <h4 className="flex"><span><FaRegCheckCircle color="grey" size="22px" /></span>24/7 support</h4>
                                        <p>Questions? Our around-the-clock support team is available to help anytime, anywhere.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="selling-container home-selling-img">
                                <img src={r32} alt="video" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-container">
                    <div className="main-container card-grid">
                        <div className="explore-marketplace">
                            <h1>Explore the marketplace</h1>
                            <div className="explore-icons">
                                <div className="icon">
                                    <img src={digital} alt="2" />
                                    <h3>Graphics &amp; Design</h3>
                                </div>
                                <div className="icon">
                                    <img src={writing} alt="3" />
                                    <h3>Writing &amp; Translation</h3>
                                </div>
                                <div className="icon">
                                    <img src={video} alt="4" />
                                    <h3>Video &amp; Animation</h3>
                                </div>
                                <div className="icon">
                                    <img src={music} alt="5" />
                                    <h3>Music &amp; Audio</h3>
                                </div>
                                <br />
                                <div className="icon">
                                    <img src={business} alt="7" />
                                    <h3>Business</h3>
                                </div>
                                <div className="icon">
                                    <img src={lifestyle} alt="8" />
                                    <h3>Lifestyle</h3>
                                </div>
                                <div className="icon" style={{ position: "relative", top: "17px" }}>
                                    <img src={data} alt="9" />
                                    <h3 style={{ position: "relative", top: "8px" }} >Data</h3>
                                </div>
                                {/* <div className="icon">
                                <img src={graphics} alt="1" />
                            </div> */}
                                {/* <div className="icon">
                                <img src={program} alt="6" />
                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )

    }
}

function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs
    }
}
const mapDispatchToProps = {
    loadGigs,
    onSetFilter
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)