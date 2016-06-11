import React, {Component, PropTypes} from 'react'

export default class ReceiptFooter extends Component {

    render() {
        let costInfo = this.props.costInfo;
        return (
            <div className="receipt-total">
                <div>总计：{costInfo.actualCost}(元)</div>
                <div>节省：{costInfo.savingCost}(元)</div>
            </div>
        )
    }
}

ReceiptFooter.PropTypes = {
    costInfo: PropTypes.object.isRequired
};