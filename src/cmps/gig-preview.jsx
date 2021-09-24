import React from 'react'
import { Link } from 'react-router-dom'

export class gigPreview extends React.Component {
    render() {
        const { gig } = this.props
        return <div className="gig-preview">
            <h3>{gig.seller.name}</h3>

            <h4>yardennnnnnn</h4>
            <h4>yardennnnnnn</h4>

            
        </div>
    }
}

