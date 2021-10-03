import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import gig1 from '../assets/img/gig1.png';

export class GigPreview extends React.Component {

    state = {
        isClicked: false,
        bgColor: ""
    }

    iconClick = (e) => {
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
                    <p className="gig-price">
                        <button className="heart-icon" onClick={this.iconClick}><FaHeart style={{ color: this.state.bgColor }} /></button>
                        <span>Starting At ${gig.price}</span></p>
                </div>
            </div>
        )
    }
}