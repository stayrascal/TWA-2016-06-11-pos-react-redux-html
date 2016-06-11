import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CHANGE_ITEM_COUNT, CALCULATE_AMOUNT} from '../constants/ActionTypes'

export default function cartItems(state = [], action) {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            var status = state.find(cartItem => cartItem.barcode === action.item.barcode);
            if (status){
                return state.map(cartItem =>cartItem.barcode === action.item.barcode ? Object.assign({}, cartItem, {count: parseInt(cartItem.count) + 1}) : cartItem)
            }else {
                return [Object.assign({}, action.item, {count:1})]
            }
        case REMOVE_ITEM_FROM_CART:
            return state.filter(cartItem => cartItem.barcode !== action.barcode);
        case CHANGE_ITEM_COUNT:
            let newState = state.map(cartItem =>cartItem.barcode === action.barcode ? Object.assign({}, cartItem, {count: action.count}) : cartItem);
            return newState;
        default:
            return state
    }
}