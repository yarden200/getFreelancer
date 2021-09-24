import React from 'react'
// import { Link } from 'react-router-dom'

export class GigPreview extends React.Component {
    render() {
        const { gig } = this.props
        return <div className="gig-preview">
            <h3>{gig.seller.name}</h3>
            <h4>{gig.title}</h4>
            <p>⭐{gig.rate} ({gig.rateCount})</p>
            <p>♡</p>
            <p>Starting At ${gig.price}</p>
        </div>
    }
}

