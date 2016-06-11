import {CALCULATE_AMOUNT} from '../constants/ActionTypes'


export default function receipt(state = [], action) {
    switch (action.type){
        case CALCULATE_AMOUNT:
            return calculate(state, action.cartItems);
        default:
            return state
    }
}

function calculate(state, items){
    let itemsWithSubtotal = calculateSubtotal(items);
    return state;
}

function calculateSubtotal(items) {
    return items.map(item => {
        return Object.assign({
            subTotal: item.price * item.quantity,
            savingCost: 0,
            freeQuantity: 0
        }, item);
    })
}