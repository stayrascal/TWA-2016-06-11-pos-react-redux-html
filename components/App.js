import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as posActions from './store/actions'
import Receipt from './receipt/Receipt'
import Shop from './shop/Shop'
import Cart from './shop/Cart'

class App extends Component {

    render() {
        const { cartItems, items, receipt, actions } = this.props;
        return (
            <div className="container">
                <div className="content inline-block">
                    <Shop addItemToCart={actions.addItemToCart} items={items}/>
                    <Cart
                        changeCount={actions.changeItemCount}
                        remove={actions.removeItemFromCart}
                        calculate={actions.calculateAmount}
                        cartItems={cartItems}/>
                </div>
                <Receipt actions={actions} cartItems={cartItems} receipt={receipt}/>
            </div>
        )
    }
}

App.PropTypes = {
    cartItems: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    receipt: PropTypes.object.isRequired
};

function mapStateToProps (state) {
    return {
        items: state.items,
        cartItems: state.cartItems,
        receipt:state.receipt
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(posActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)