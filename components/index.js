import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import configureStore from './store/configureStore'
const initalState = {
    items:[{
        barcode: 'ITEM-001',
        name: '全国联通全国流量充值500M手机流量包流量卡自动充值当月有效1',
        logo: 'images/logo.jpg',
        price:'27.5'
    },{
        barcode: 'ITEM-002',
        name: '全国联通全国流量充值500M手机流量包流量卡自动充值当月有效2',
        logo: 'images/logo.jpg',
        price:'28.5'
    },{
        barcode: 'ITEM-003',
        name: '全国联通全国流量充值500M手机流量包流量卡自动充值当月有效3',
        logo: 'images/logo.jpg',
        price:'29.5'
    }],
    cartItems:[],
    receipt:{
        shopName: '没钱赚商店',
        itemsInfo:[],
        freeItemsInfo:[],
        costInfo:{
            originCost:0,
            actualCost:0,
            savingCost:0
        }
    }
};

const store = configureStore(initalState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);