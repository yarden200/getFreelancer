import React from 'react'
import { connect } from 'react-redux'
import { onAddOrder } from '../store/order.actions'
import {userService} from '../services/user.service.js'
// import { SellerPage } from '../pages/seller-page.jsx'
// import { GigDetails } from '../pages/gig-details';
// import ImageUploader from "react-images-upload";


export class _OrderAdd extends React.Component {



    state = {
        order: {
            // _id: will be set on storage make_id or server data base
            createrAt: new Date().toLocaleDateString + new Date().toLocaleTimeString,
            status: 'pending',
            totalPrice: '',
            deliveryTime: '',

            seller: {
                _id: '',
                fullname: '',
            },

            buyer: {
                _id: '',
                fullname: ''
            },

            gig: {
                _id: '',
                title: '',
            }
        },
    }


    async componentDidMount()  {
        const buyer = await userService.getLoggedinUser()
        const { gig } = this.props
        console.log('order from order add', gig, buyer);
        this.setState({ order: { deliveryTime: new Date() + gig.deliveryTime, totalPrice: gig.price, seller: { _id: gig.seller._id, fullname: gig.seller.fullname }, /*buyer: { _id: buyer._id, fullname: buyer.fullname },*/ gig: { _id: gig._id, title: gig.title } } })
        // console.log('order fron order add', order);

    }

    handleTextChange = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        this.setState({ order: { ...this.state.order, [field]: value } })
        // console.log(this.state.order);
    };

    onOrder = () => {
        // ev.preventDefault();
        console.log('order from add order', this.state.order);
        this.props.onAddOrder(this.state.order)
        this.setState({ order: { createrAt: '', status: '', totalPrice: '', deliveryTime: '', seller: { _id: '', fullname: '' }, buyer: { _id: '', fullname: '' }, gig: { _id: '', title: '' } } })
    }


    render() {


        return (
            <div className="order-add">
                <button className="continue-button" onClick={() => this.onOrder()} > Continue $75.00</button>

                {/* {gig.img} todo add img
                {gig.title}
                {gig.rating} todo add rating
                {gig.reviewsCount} todo reviews count
                {gig.included} todo included services
                {gig.deliveryTime}
                Sub Total:{totalPrice}
                Service Fee:3$
                Totat Price:{totalPrice+3}

               todo itay-add form input for user remarks for seller */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        orders: state.orderModule.orders
    }
}

const mapDispatchToProps = {
    onAddOrder,
}

export const OrderAdd = connect(mapStateToProps, mapDispatchToProps)(_OrderAdd)