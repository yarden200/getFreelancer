
import Axios from 'axios'
const axios = Axios.create({
    withCredentials: true
});

// import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'
// import { userService } from './user.service.js'

const STORAGE_KEY = 'order'
const listeners = []

export const orderService = {
    query,
    // getById,
    save,
    // remove,
    // subscribe

}
window.cs = orderService;


function query(filterBy = {}) {
    // return storageService.query(STORAGE_KEY, filterBy)
    return axios.get('http://127.0.0.1:3030/api/order', {params: filterBy}).then(res => res.data)

}

// function getById(orderId) {
//     return storageService.get(STORAGE_KEY, orderId)
// }

// function remove(orderId) {
//     return storageService.remove(STORAGE_KEY, gigId)
// }

function save(order) {
    if (order._id) {return}
        //update
    //     return storageService.put(STORAGE_KEY, order)
    // } else {
        //add
        // order.buyer = userService.getLoggedinUser()
        console.log('order buyer from  gig service', order.buyer);
        // return storageService.post(STORAGE_KEY, order)
        return axios.post('http://127.0.0.1:3030/api/order', order).then(res => res.data)
    // }
}

function subscribe(listener) {
    listeners.push(listener)
}

function _notifySubscribersGigsChanged(orders) {
    console.log('Notifying Listeners');
    listeners.forEach(listener => listener(orders))
}

window.addEventListener('storage', () => {
    console.log('Storage Changed from another Browser!');
    query()
        .then(orders => {
            _notifySubscribersGigsChanged(orders)
        })
})