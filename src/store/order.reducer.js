const initialState = {
    orders:[],
}

export function orderReducer(state = initialState, action) {
    // console.log('action from reduc',action);
    var newState = state
    // var orders
    switch (action.type) {
        case 'SET_ORDERS':
            newState = { ...state, orders: action.orders }
            break
        case 'ORDER_GIG':
            newState = { ...state, orders:[...state.orders, action.order]}
            break
        default:
    }
    // For debug:
    window.orderState = newState
    console.log('Prev State:', state)
    console.log('Action:', action)
    console.log('New State:', newState)
    return newState

}