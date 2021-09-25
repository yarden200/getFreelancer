import React from 'react'
import { Link } from 'react-router-dom'

export class GigPreview extends React.Component {
    render() {
        const { gig } = this.props
        console.log('gig from preview',gig);
        return <div className="gig-preview">
            <h3>{gig.seller.fullname}</h3>
            <Link to={`/explore/${gig._id}`}> <h4>{gig.title}</h4> </Link>
            <p>⭐{gig.rate} ({gig.rateCount})</p>
            <p>♡</p>
            <p>Starting At ${gig.price}</p>
        </div>
    }
}

