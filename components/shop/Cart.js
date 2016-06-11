import React, {Component, PropTypes} from 'react'

import CartItem from './CartItem'

export default class Cart extends Component {


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
            </div>
        )
    }
}

Cart.PropTypes = {
    changeCount: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired
};