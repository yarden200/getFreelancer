import React from 'react'
import { connect } from 'react-redux'
import { loadGigs, onAddGig, onEditGig, onRemoveGig, addToCart } from '../store/gig.actions.js'
import { showSuccessMsg } from '../services/event-bus.service.js'
import { GigList } from '../cmps/gig-list.jsx'


class _ExplorePage extends React.Component {
    state = {

    }

    //CHECK//
    componentDidMount() {
        this.props.loadGigs()
    }

    onRemoveGig = (gigId) => {
        this.props.onRemoveGig(gigId)
    }
    onAddGig = (gig) => {
        this.props.onAddGig(gig)
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
                    <div >
                        <GigList
                            gigs={gigs}
                        />
                    </div>
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


export const ExplorePage = connect(mapStateToProps, mapDispatchToProps)(_ExplorePage)