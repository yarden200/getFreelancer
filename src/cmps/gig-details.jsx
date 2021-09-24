import React from 'react'


export class GigDetails extends React.Component {
    render() {
        const { gig } = this.props
        return(
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
                <h5>{gig.seller.name}⭐{gig.rate} ({gig.rateCount})</h5>
                <p>HUGE IMAGE</p>
            </div>
        </div>

        )}
}
