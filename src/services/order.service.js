
import { userService } from './user.service.js'
import { httpService } from './http.service'

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
    var queryStr = (!filterBy) ? '' : filterBy
    return httpService.get(`order`,queryStr)
}

// function getById(orderId) {
//     return storageService.get(STORAGE_KEY, orderId)
// }

// function remove(orderId) {
//     return storageService.remove(STORAGE_KEY, orderId)
// }

function save(order) {
    if (order._id) {return}
        //update
    //     return storageService.put(STORAGE_KEY, order)
    // } else {
        //add
        order.buyer = userService.getLoggedinUser()
        console.log('order buyer from  gig service', order.buyer)
        return httpService.post(`order`, order)
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