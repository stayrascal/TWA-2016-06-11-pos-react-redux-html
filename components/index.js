import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import configureStore from './store/configureStore'
const initalState = {
    items:[{
        barcode: 'ITEM-001',
        name: '可口可乐',
        logo: 'images/logo.jpg',
        price:'3',
        unit: '瓶'
    },{
        barcode: 'ITEM-002',
        name: '羽毛球',
        logo: 'images/logo.jpg',
        price:'1',
        unit: '个'
    },{
        barcode: 'ITEM-003',
        name: '苹果',
        logo: 'images/logo.jpg',
        price:'5.5',
        unit: '斤'
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