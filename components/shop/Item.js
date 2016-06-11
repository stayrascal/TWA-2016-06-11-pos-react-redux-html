import React, {Component, PropTypes} from 'react'

export default class Item extends Component {

    render() {
        return (
            <div className="item">
                <div className="logo inline-block"><img src={this.props.item.logo}/></div>
                <div className="name inline-block">{this.props.item.name}</div>
                <div className="price inline-block"><strong className="money">${this.props.item.price}</strong></div>
                <div className="deal inline-block"><a className="btn" onClick={this.props.addItemToCart}>添加到购物车</a>
                </div>
            </div>
        )
    }
}

Item.PropTypes = {
    addItemToCart: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};
