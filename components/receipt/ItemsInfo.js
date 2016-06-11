import React, {Component, PropTypes} from 'react'

export default class ItemsInfo extends Component {

    renderItemInfo() {
        return this.props.itemsInfo.map(itemInfo =>
            <div>名称：{itemInfo.name}，数量：{itemInfo.count}{itemInfo.unit}，单价：{itemInfo.price}(元)，小计：{itemInfo.subTotal}(元)</div>
        )

    }

    render() {
        return (
            <div className="receipt-items">
                {this.renderItemInfo()}
            </div>
        )
    }
}

ItemsInfo.PropTypes = {
    itemsInfo: PropTypes.array.isRequired
};