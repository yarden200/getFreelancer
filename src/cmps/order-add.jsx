import React from 'react'
import { connect } from 'react-redux'
import { onAddOrder } from '../store/order.actions'
import { userService } from '../services/user.service.js'
import { socketService } from '../services/socket.service'

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
                ctegory:''
            }
        },
    }

    async componentDidMount() {
        const buyer = await userService.getLoggedinUser()
        const { gig } = this.props
        const today = new Date()
        console.log('order from order add', gig, buyer);
        this.setState({
            order: {
                createdAt: new Date().toLocaleDateString('he') + ' ' + new Date().toLocaleTimeString('he', { hour: '2-digit', minute: '2-digit' }),
                deliveryTime: new Date((today.setDate(today.getDate() + `${gig.deliveryTime}`))).toLocaleDateString('he') + ' ' + new Date().toLocaleTimeString('he', { hour: '2-digit', minute: '2-digit' }),
                totalPrice: gig.price + '$',
                seller: { _id: gig.seller._id, fullname: gig.seller.fullname },
                buyer: { _id: buyer._id, fullname: buyer.fullname }, gig: { _id: gig._id, title: gig.title, category:gig.category }
            }
        })
        socketService.setup()
        const from = buyer.fullname
        const to = gig.seller._id
    }

    handleTextChange = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        this.setState({ order: { ...this.state.order, [field]: value } })
    };

    onOrder = () => {
        console.log('order from add order', this.state.order);
        this.props.onAddOrder(this.state.order)
        this.setState({ order: { createrAt: '', status: '', totalPrice: '', deliveryTime: '', seller: { _id: '', fullname: '' }, buyer: { _id: '', fullname: '' }, gig: { _id: '', title: '', category:'' } } })
    }


    render() {

        return (
            <div className="order-add">
                <button className="continue-button" onClick={() => this.onOrder()} > Continue $75.00</button>
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