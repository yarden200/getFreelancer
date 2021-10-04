import { storageService } from './async-storage.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'gig'
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
    return storageService.query(STORAGE_KEY, filterBy)
}

function getById(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

function remove(gigId) {
    return storageService.remove(STORAGE_KEY, gigId)
}

function save(gig) {
    if (gig._id) {
        //update
        return storageService.put(STORAGE_KEY, gig)
    } else {
        //add
        gig.seller = userService.getLoggedinUser()
        console.log('gig seller from  gig service', gig.seller);
        return storageService.post(STORAGE_KEY, gig)
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