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
    return state;
}