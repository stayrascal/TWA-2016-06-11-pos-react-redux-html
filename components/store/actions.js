import * as types from './constants/ActionTypes'

export function addItemToCart(item){
    return {type:types.ADD_ITEM_TO_CART, item}
}

export function removeItemFromCart(barcode) {
    return {type:types.REMOVE_ITEM_FROM_CART, barcode}
}

export function changeItemCount(barcode, count) {
    return {type:types.CHANGE_ITEM_COUNT, barcode, count}
}

export function calculateAmount(cartItems){
    return {type: types.CALCULATE_AMOUNT, cartItems}
}
