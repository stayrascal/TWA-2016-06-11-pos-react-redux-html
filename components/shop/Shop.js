import React, {Component, PropTypes} from 'react'
import Item from './Item'

export default class Shop extends Component {

    renderItem() {
        return this.props.items.map((item, index) =><Item item={item} addItemToCart={e => this.props.addItemToCart(item)} key={index}/>)
    }

    render() {
        return (
            <div className="shop">
                <div className="title">Shopping</div>
                {this.renderItem()}
            </div>
        )
    }
}

Shop.PropTypes = {
    items: PropTypes.array.isRequired,
    addItemToCart: PropTypes.func.isRequired
};