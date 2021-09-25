import React from 'react'

import { gigService } from '../services/gig.service.js'
export class GigDetails extends React.Component {
    state = {
        gig: null,
    }

    componentDidMount() {
        const gigId = this.props.match.params.gigId
        if (!gigId) return
        gigService.getById(gigId)
            .then(gig => {
                this.setState({ gig })
            })
    }

    render() {
        const { gig } = this.state
        if(!gig) return <div>Loading</div>
        return (
            <div className="main-details">
                <div className="sidenav">
                <div className="standrd-package">
                </div>
                <div className="order-confirmation">
                </div>
            </div>
            <div className="gig-details">
                <p>♡</p>
                <h2>{gig.title}</h2>
                <h5>{gig.seller.name}:star:{gig.rate} ({gig.rateCount})</h5>
                <p>HUGE IMAGE</p>
            </div>
            </div>
        )
    }
}
