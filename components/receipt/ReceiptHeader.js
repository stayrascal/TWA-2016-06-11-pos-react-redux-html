import React, {Component, PropTypes} from 'react'

export default class ReceiptHeader extends Component {

    renderCalculateTime() {
        let dateDigitToString = function (num) {
            return num < 10 ? '0' + num : num;
        };

        var currentDate = new Date(),
            year = dateDigitToString(currentDate.getFullYear()),
            month = dateDigitToString(currentDate.getMonth() + 1),
            date = dateDigitToString(currentDate.getDate()),
            hour = dateDigitToString(currentDate.getHours()),
            minute = dateDigitToString(currentDate.getMinutes()),
            second = dateDigitToString(currentDate.getSeconds());
        return year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
    }

    render() {
        return (
            <div className="receipt-header">
                <div className="shop-name">***{this.props.shopName}-购物清单***</div>
                <div>打印时间：{this.renderCalculateTime()}</div>
            </div>
        )
    }
}

ReceiptHeader.PropTypes = {
    shopName: PropTypes.string.isRequired
};