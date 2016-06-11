import React, {Component, PropTypes} from 'react'

export default class CartItem extends Component {

    onchange(e) {
        const node = this.refs.barcode;
        const barcode = node.value.trim();
        const count = e.currentTarget.value;
        this.props.changeCount(barcode, count)
    }

    remove() {
        const node = this.refs.barcode;
        const barcode = node.value.trim();
        this.props.remvoe(barcode)
    }

    render() {
        return (
            <div className="item">
                <div className="logo inline-block"><img src={this.props.cartItem.logo}/></div>
                <div className="name inline-block">{this.props.cartItem.name}</div>
                <div className="price inline-block"><strong className="money">${this.props.cartItem.price}</strong></div>
                <div className="count inline-block">
                    <input type="hidden" value={this.props.cartItem.barcode} ref="barcode"/>
                    <input type="number" value={this.props.cartItem.count} min="0" onChange={e => this.onchange(e)}/>
                </div>
                <div className="deal inline-block"><a className="btn" onClick={this.props.remove}>删除</a></div>
            </div>
        )
    }
}

CartItem.PropTypes = {
    changeCount: PropTypes.func.isRequired,
    cartItem: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired
};
