import {CALCULATE_AMOUNT} from '../constants/ActionTypes'
import Promotion from './Promotion'


export default function receipt(state = [], action) {
    switch (action.type){
        case CALCULATE_AMOUNT:
            return calculate(state, action.cartItems);
        default:
            return state
    }
}

function calculateSubtotal(items) {
    return items.map(item => {
        return Object.assign({
            subTotal: item.price * item.count,
            savingCost: 0,
            freeCount: 0
        }, item);
    })
}

function calculateCostInfo(items) {
    var resultObj = {originCost: 0.0, savingCost: 0.0, actualCost: 0.0};
    items.forEach(item => {
        resultObj.originCost += item.subTotal;
        resultObj.savingCost += item.savingCost;
    });
    resultObj.actualCost = resultObj.originCost - resultObj.savingCost;
    return resultObj;
}

function getFreeItems(cartItems) {
    return cartItems.filter(item => {
        return item.freeCount > 0;
    });
}

function calculateActualSubTotal(items) {
    return items.map(item => {
        return Object.assign({
            actualSubTotal: item.subTotal - item.savingCost
        }, item);
    });
}

function applyPromotionsOnCartItems(items, promotions) {
    items.map(item => {
        promotions.forEach(promotion => {
            promotionStrategy[promotion.type](promotion, item);
        });
    });
}

var promotionStrategy = {
    'BUY_TWO_GET_ONE_FREE': function (promotion, item) {

        promotion.barcodes.forEach(barcode => {
            if (barcode === item.barcode) {
                item.freeCount = parseInt(item.count / 3);
                item.savingCost = item.freeCount * item.price;
            }
        });
    }
};

function loadPromotions() {
    return [
        new Promotion('BUY_TWO_GET_ONE_FREE', [
            'ITEM000000',
            'ITEM000001',
            'ITEM000005'
        ])
    ];
}


function calculate(state, items){

    let itemsWithSubtotal = calculateSubtotal(items);

    applyPromotionsOnCartItems(itemsWithSubtotal, loadPromotions());

    let costInfo = calculateCostInfo(itemsWithSubtotal);
    let freeItems = getFreeItems(itemsWithSubtotal);
    let itemsWithActualSubTotal = calculateActualSubTotal(itemsWithSubtotal);

    return Object.assign({}, state, {
        itemsInfo:itemsWithActualSubTotal,
        freeItemsInfo:freeItems,
        costInfo:costInfo
    })
}