import React, {Component, PropTypes} from 'react'

export default class FreeItemsInfo extends Component {

    renderFreeItemInfo(freeItemsInfo) {
        return freeItemsInfo.map((freeItem, index) => <div key={index}>名称：{freeItem.name}，数量：{freeItem.freeCount}{freeItem.unit}</div>)
    }

    render() {
        let freeItemsInfo = this.props.freeItemsInfo;
        if (freeItemsInfo.length > 0) {
            return (
                <div className="receipt-free">
                    <div>挥泪赠送商品：</div>
                    {this.renderFreeItemInfo(freeItemsInfo)}
                </div>
            )
        }else {
            return null;
        }
    }
}

FreeItemsInfo.PropTypes = {
    freeItemsInfo: PropTypes.array.isRequired
};