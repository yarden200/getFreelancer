import React from 'react'
import { connect } from 'react-redux'
import { onAddGig, onEditGig, onRemoveGig } from '../store/gig.actions.js'
import { GigAdd } from '../cmps/gig-add.jsx'
import { loadOrders } from '../store/order.actions.js'
import { OrderList } from '../cmps/order-list.jsx'
const queryString = require('query-string');



class _SellerPage extends React.Component {
    state = {
        orders: []

    }

    async componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        console.log(parsed);
        const {userId} = parsed
        console.log(userId);
        await this.props.loadOrders()
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
        const { orders } = this.props
        return (
            <div className="seller-page main-container">
                <div className="orders-list">
                    <OrderList orders={orders} />
                </div>
                <div className="start-selling"></div>
                <h3>Start Selling</h3>
                <GigAdd onAddGig={this.onAddGig} />
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