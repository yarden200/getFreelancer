import React from 'react'
import { Link } from 'react-router-dom'
// import a5 from '../assets/img/a5.PNG';
// import a6 from '../assets/img/a6.PNG';
// import a7 from '../assets/img/a7.PNG';
// import a8 from '../assets/img/a8.PNG';
// import a9 from '../assets/img/a9.PNG';
import { FaHeart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
// import { FaSearch } from 'react-icons/fa';
// import GigsCarusel from './gigs-slider';
// import Carousel from 'react-multi-carousel';
import gig1 from '../assets/img/gig1.png';





export class GigPreview extends React.Component {

    state = {
        isClicked: false,
        bgColor: ""
    }

    // componentDidMount() {
    //     this.state.isClicked ? this.setState({ bgColor: "red" })
    //         : this.setState({ bgColor: "grey" })

    // }

    iconClick = () => {
        // this.state.isClicked ? this.setState(({ bgColor: "red" }), () => {
        //     console.log(this.state.bgColor);
        // })
        //     : this.setState({ bgColor: "grey" })

        this.setState({
            bgColor: "red"
        })
    }


    render() {
        const { gig } = this.props
        return (
            <div className="gig-preview card-grid">
                <div className="gig-img">
                    <img src={gig1} alt="gig" />
                </div>
                <div className="gig-description">
                    <h3><span><FaUser style={{ color: 'grey' }} /></span>{gig.seller?.fullname}</h3>
                    <Link to={`/details/${gig._id}`}> <h4>{gig.title}</h4> </Link>
                    <p>⭐{gig.rate} ({gig.rateCount})</p>
                    <div className="gig-price">
                        <button className="heart-icon" onClick={this.iconClick}><FaHeart style={{ color: this.state.bgColor }} /></button>
                        <span>Starting At ${gig.price}</span>
                    </div>
                </div>
            </div>
        )
    }
}

