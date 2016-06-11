import React, {Component, PropTypes} from 'react'

import ItemsInfo from './ItemsInfo'
import FreeItemsInfo from './FreeItemsInfo'
import ReceiptHeader from './ReceiptHeader'
import ReceiptFooter from './ReceiptFooter'

export default class Receipt extends Component {
    render() {
        let receipt = this.props.receipt;
        return (
            <div className="receipt inline-block">
                <div className="title">Receipt</div>
                <div className="receipt-info">
                    <ReceiptHeader shopName={receipt.shopName}/>
                    <ItemsInfo itemsInfo={receipt.itemsInfo}/>
                    <FreeItemsInfo freeItemsInfo={receipt.freeItemsInfo}/>
                    <ReceiptFooter costInfo={receipt.costInfo}/>
                </div>
            </div>
        )
    }
}

Receipt.PropTypes = {
    receipt: PropTypes.object.isRequired
};