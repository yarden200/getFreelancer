import { orderService } from "../services/order.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'


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
                showSuccessMsg('Order added')
            })
            .catch(err => {
                showErrorMsg('Cannot add order')
                console.log('Cannot add order', err)
            })
    }
}