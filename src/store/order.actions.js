
import { orderService } from "../services/order.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { socketService } from "../services/socket.service.js";


export function loadOrders(filterBy={}) {
    return (dispatch) => {
        orderService.query(filterBy)
            .then(orders => {
                console.log('Orders from DB:', orders)
                dispatch({
                    type: 'SET_ORDERS',
                    orders
                })


            })
            .catch(err => {
                showErrorMsg('Cannot load orders')
                console.log('Cannot load orders', err)
            })

        // orderService.subscribe((orders) => {
        //     console.log('Got notified');
        //     dispatch({
        //         type: 'SET_GIGS',
        //         orders
        //     })
        // })
    }
}

export function onAddOrder(order) {
    return (dispatch) => {
        orderService.save(order)
            .then(savedOrder => {
                console.log('Added Order', savedOrder);
                dispatch({
                    type: 'ORDER_GIG',
                    order: savedOrder
                })
                showSuccessMsg(`Your order was sent, please wait for response from,${savedOrder.seller.fullname}`)
                // const from = savedOrder.buyer.fullname
                // const to = savedOrder.seller._id
                // socketService.emit('seller-msg', { from, title: savedOrder.gig.title, to })
                // console.log(savedOrder);
                socketService.emit('gig-orderd',` ${savedOrder.gig.category} Gig Was Just Orderd From ${savedOrder.seller.fullname}`)
                // socketService.emit('gig-orderd',savedOrder)
            })
            .catch(err => {
                showErrorMsg('Cannot add order')
                console.log('Cannot add order', err)
            })
    }
}