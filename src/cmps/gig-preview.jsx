import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import gig1 from '../assets/img/gig1.png';

export class GigPreview extends React.Component {

    state = {
        isClicked: false,
        bgColor: "lightgray"
    }

    iconClick = (e) => {
        this.setState({
            bgColor: "red"
        })
    }
    render() {
        const { gig } = this.props
        return (
            <div className="gig-preview">
                <div className="gig-img">
                    <img src={gig.imgUrls} alt="gig" />
                </div>
                <div className="gig-description">
                    <div className="seller-info">
                        <span><FaUser style={{ color: 'grey' }} /></span>{gig.seller?.fullname}
                    </div>
                    <div className="gig-title">
                        <Link to={`/details/${gig._id}`}> <h4>{gig.title}</h4> </Link>
                    </div>
                    <div className="gig-info">⭐{gig.rate} ({gig.rateCount})</div>
                    <footer>
                        <div className="gig-price flex between" >
                            <button className="heart-icon" onClick={this.iconClick}><FaHeart style={{ color: this.state.bgColor }} /></button>
                            <div className="flex">
                                <span className="price-txt"> STARTING AT</span>
                                <span className="price"> ${gig.price}</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}