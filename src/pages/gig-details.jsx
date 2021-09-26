import React from 'react'

import { gigService } from '../services/gig.service.js'
import  example  from '../assets/img/example.PNG'
// var example = require('../assets/img/example.PNG');
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
            <div className="flex-container">
                <div className="gig-details">
                    <p><span>♡ 187</span></p>
                    <h2>{gig.title}</h2>
                    <h5>{gig.seller.fullname}⭐{gig.rate} ({gig.rateCount})</h5>
                    <img src={gig.imgs[0].name} alt="Example" style={{maxWidth: '500px'}}/>
                </div>
                <aside className="sidenav">
                    <div className="standrd-package">
                    </div>
                    <div className="order-confirmation">
                    </div>
                </aside>
            </div>
        )
    }
}
