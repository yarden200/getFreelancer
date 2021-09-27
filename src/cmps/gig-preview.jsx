import React from 'react'
import { Link } from 'react-router-dom'
import a5 from '../assets/img/a5.PNG';
import { FaHeart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';


export class GigPreview extends React.Component {
    render() {
        const { gig } = this.props
        // console.log('gig from preview',gig);
        return (
            <div className="gig-preview card-grid">
                <div className="gig-img">
                    <img src={a5} alt="a5" />
                </div>
                <div className="gig-description">
                    <h3><span><FaUser style={{color: 'grey'}}/></span>{gig.seller.fullname}</h3>
                    <Link to={`/details/${gig._id}`}> <h4>{gig.title}</h4> </Link>
                    <p>⭐{gig.rate} ({gig.rateCount})</p>
                    <p className="gig-price"><FaHeart style={{color: 'red'}}/><span>Starting At ${gig.price}</span></p>
                </div>
            </div>
        )
    }
}

