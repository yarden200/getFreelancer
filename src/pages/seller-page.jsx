import React from 'react'
import { connect } from 'react-redux'
import { onAddGig, onEditGig, onRemoveGig } from '../store/gig.actions.js'
import { GigAdd } from '../cmps/gig-add.jsx'
import { loadOrders } from '../store/order.actions.js'


class _SellerPage extends React.Component {
    state = {
        orders: ''

    }

    //CHECK//
    async componentDidMount() {
        // add loggedinSeller._id to loadOrders
        const userOrders = await this.props.loadOrders()
        this.setState({ orders: userOrders })
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



    render() {

        return (
            <div className="seller-page main-container">
                <h3>Start Selling</h3>
                <GigAdd onAddGig={this.onAddGig} />
                <div>
                    {/* todo itay render orders */}
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs,
        orders: state.orderModule.orders
    }
}
const mapDispatchToProps = {
    onRemoveGig,
    onAddGig,
    onEditGig,
    loadOrders
}


export const SellerPage = connect(mapStateToProps, mapDispatchToProps)(_SellerPage)