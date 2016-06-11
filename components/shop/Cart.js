import React, {Component, PropTypes} from 'react'

import CartItem from './CartItem'

export default class Cart extends Component {

    renderCalculateButton() {
        if (this.props.cartItems.length > 0) {
            return (
                <div className="item">
                    <a className="btn" onClick={e => this.props.calculate(this.props.cartItems)}>结算</a>
                </div>
            )
        }
    }

    renderCartItems() {
        return this.props.cartItems.map((cartItem, index) =>
            <CartItem
                changeCount={this.props.changeCount}
                remove={e => this.props.remove(cartItem.barcode)}
                cartItem={cartItem}
                key={index}/>)
    }

    render() {
        return (
            <div className="cart">
                <div className="title">My Cart</div>
                <div className="list">
                    {this.renderCartItems()}
                </div>
                {this.renderCalculateButton()}
            </div>
        )
    }
}

Cart.PropTypes = {
    changeCount: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired
};