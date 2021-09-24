import React from 'react'
import { connect } from 'react-redux'


import { loadGigs, onAddGig, onEditGig, onRemoveGig, addToCart } from '../store/gig.actions.js'
import { showSuccessMsg } from '../services/event-bus.service.js'

class _GigApp extends React.Component {
    state = {

    }

    componentDidMount() {
        this.props.loadGigs()
    }

    onRemoveGig = (gigId) => {
        this.props.onRemoveGig(gigId)
    }
    onAddGig = () => {
        this.props.onAddGig(/*gig*/)
    }
    onEditGig = (gig) => {
        const price = +prompt('New price?')
        const gigToSave = { ...gig, price }
        this.props.onEditGig(gigToSave)
    }
    addToCart = (gig) => {
        console.log(`Adding ${gig.vendor} to Cart`)
        this.props.addToCart(gig)
        showSuccessMsg('Added to Cart')
    }
    render() {
        const { gigs } = this.props
        console.log('in render:', gigs);
        return (
            <div>
                <h3>Gigs App</h3>
                <main>
                    <button onClick={this.onAddGig}>Add Gig ⛐</button>
                    <ul className="gig-list">
                        {gigs.map(gig =>
                            <li className="gig-preview" key={gig._id}>
                                <h4>{gig.topic}</h4>
                                <h1>⛐</h1>
                                <p>Price: <span>${gig.price.toLocaleString()}</span></p>
                                {/* <p>Owner: <span>{gig.owner && gig.owner.fullname}</span></p> */}
                                <div>
                                    <button onClick={() => {
                                        this.onRemoveGig(gig._id)
                                    }}>x</button>
                                    <button onClick={() => {
                                        this.onEditGig(gig)
                                    }}>Edit</button>
                                </div>
                                <button className="buy" onClick={() => {
                                    this.addToCart(gig)
                                }}>Add to Cart</button>

                            </li>)}
                    </ul>
                </main>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs
    }
}
const mapDispatchToProps = {
    loadGigs,
    onRemoveGig,
    onAddGig,
    onEditGig,
    addToCart
}


export const GigApp = connect(mapStateToProps, mapDispatchToProps)(_GigApp)