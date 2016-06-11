import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CHANGE_ITEM_COUNT, CALCULATE_AMOUNT} from '../constants/ActionTypes'

export default function cartItems(state = [], action) {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            var status = state.find(cartItem => cartItem.barcode === action.item.barcode);
            if (status){
                return state.map(cartItem =>cartItem.barcode === action.item.barcode ? Object.assign({}, cartItem, {count: cartItem.count + 1}) : cartItem)
            }else {
                return [...state, {
                    barcode: action.item.barcode,
                    logo: action.item.logo,
                    count: 1,
                    name: action.item.name,
                    price: action.item.price
                }];
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