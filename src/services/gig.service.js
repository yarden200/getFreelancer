// import { storageService } from './async-storage.service.js'
import { userService } from './user.service.js'
import Axios from 'axios'
const axios = Axios.create({
    withCredentials: true
});


// const STORAGE_KEY = 'gig'
const listeners = []


export const gigService = {
    query,
    getById,
    save,
    remove,
    subscribe
}

window.cs = gigService;

function query(filterBy = {}) {
    // return storageService.query(STORAGE_KEY, filterBy)
    return axios.get('http://127.0.0.1:3030/api/gig', {params: filterBy}).then(res => res.data)

}

function getById(gigId) {
    // return storageService.get(STORAGE_KEY, gigId)
    return axios.get(`http://127.0.0.1:3030/api/gig/${gigId}`).then(res => res.data)

}

function remove(gigId) {
    // return storageService.remove(STORAGE_KEY, gigId)
    return axios.delete(`http://127.0.0.1:3030/api/gig/${gigId}`)

}

function save(gig) {
    if (gig._id) {
        //update
        // return storageService.put(STORAGE_KEY, gig)
        return axios.put('http://127.0.0.1:3030/api/gig/', gig).then(res => res.data)

    } else {
        //add
        // const loggedinSeller = userService.getLoggedinUser()  //dont get seller password
        // gig.seller._id = loggedinSeller._id                   //dont get seller password
        // gig.seller.fullname = loggedinSeller.fullname         //dont get seller password
        gig.seller = userService.getLoggedinUser()

        console.log('gig seller from  gig service', gig.seller);
        // return storageService.post(STORAGE_KEY, gig)
        return axios.post('http://127.0.0.1:3030/api/gig/', gig).then(res => res.data)
    }
}

function subscribe(listener) {
    listeners.push(listener)
}

function _notifySubscribersGigsChanged(gigs) {
    console.log('Notifying Listeners');
    listeners.forEach(listener => listener(gigs))
}

window.addEventListener('storage', () => {
    console.log('Storage Changed from another Browser!');
    query()
        .then(gigs => {
            _notifySubscribersGigsChanged(gigs)
        })
})