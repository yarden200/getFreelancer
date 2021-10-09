

import { gigService } from "../services/gig.service.js";
import { userService } from "../services/user.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function loadGigs(filterBy = {}) {
    console.log('filter from action',filterBy);
    return (dispatch) => {
        gigService.query(filterBy)
            .then(gigs => {
                // console.log('Gigs from DB:', gigs)
                dispatch({
                    type: 'SET_GIGS',
                    gigs
                })
            })
            .catch(err => {
                showErrorMsg('Cannot load gigs')
                console.log('Cannot load gigs', err)
            })

        gigService.subscribe((gigs) => {
            console.log('Got notified');
            dispatch({
                type: 'SET_GIGS',
                gigs
            })
        })
    }
}

export function onRemoveGig(gigId) {
    return (dispatch, getState) => {
        gigService.remove(gigId)
            .then(() => {
                console.log('Your Gig Was Deleted Succesfully!');
                dispatch({
                    type: 'REMOVE_GIG',
                    gigId
                })
                showSuccessMsg('Gig removed')
            })
            .catch(err => {
                showErrorMsg('Cannot remove gig')
                console.log('Cannot remove gig', err)
            })
    }
}

export function onAddGig(gig) {
    return (dispatch) => {
        gigService.save(gig)
            .then(savedGig => {
                console.log('Added Gig', savedGig);
                dispatch({
                    type: 'ADD_GIG',
                    gig: savedGig
                })
                showSuccessMsg('The New Gig Was Added Succesfully!')
            })
            .catch(err => {
                showErrorMsg('Cannot add gig')
                console.log('Cannot add gig', err)
            })
    }
}

export function onEditGig(gigToSave) {
    return (dispatch) => {
        gigService.save(gigToSave)
            .then(savedGig => {
                console.log('Updated Gig:', savedGig);
                dispatch({
                    type: 'UPDATE_GIG',
                    gig: savedGig
                })
                showSuccessMsg('Your Gig Was Apdated Succesfully!')
            })
            .catch(err => {
                showErrorMsg('Cannot update gig')
                console.log('Cannot save gig', err)
            })
    }
}

export function onSetFilter(filterBy) {
    return (dispatch) => {
        gigService.query(filterBy)
            .then(gigs => {
                console.log('in action gigs:', gigs);
                dispatch({
                    type: 'SET_GIGS',
                    gigs
                })
            })
    }
}

export function addToCart(gig) {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TO_CART',
            gig
        })
    }
}

export function removeFromCart(gigId) {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            gigId
        })
    }
}

export function checkout() {
    return async (dispatch, getState) => {
        try {
            const state = getState()
            const total = state.gigModule.cart.reduce((acc, gig) => acc + gig.price, 0)
            const score = await userService.changeScore(-total)
            dispatch({ type: 'SET_SCORE', score })
            dispatch({ type: 'CLEAR_CART' })
            showSuccessMsg('Charged you: $' + total.toLocaleString())


        } catch (err) {
            showErrorMsg('Cannot checkout, login first')
            console.log('GigActions: err in checkout', err)
        }
    }
}

// Demo for Optimistic Mutation (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveGigOptimistic(gigId) {

    return (dispatch, getState) => {

        dispatch({
            type: 'REMOVE_GIG',
            gigId
        })
        showSuccessMsg('Gig removed')

        gigService.remove(gigId)
            .then(() => {
                console.log('Server Reported - Deleted Succesfully');
            })
            .catch(err => {
                showErrorMsg('Cannot remove gig')
                console.log('Cannot load gigs', err)
                dispatch({
                    type: 'UNDO_REMOVE_GIG',
                })
            })
    }
}