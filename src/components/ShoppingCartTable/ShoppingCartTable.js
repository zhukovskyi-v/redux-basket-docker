import React from 'react';
import {connect} from 'react-redux'
import './shopping-cart-table.css';
import {productAddedToCart, productRemovedFromCart} from '../../actions';

const ShoppingCartTable = ({items, total, onIncrease, onDecrease,}) => {

    const renderCart = (el, idx) => {
        return (<tr key={idx}>
            <td>{idx + 1}</td>
            <td>{el.name.toUpperCase()}</td>
            <td>{el.count}</td>
            <td>{el.total}$</td>
            <td>
                <button onClick={() => {
                    onDecrease(el.id)
                }} className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-minus-circle"/>
                </button>
                <button onClick={() => {
                    onIncrease(el.id)
                }} className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-plus-circle"/>
                </button>
            </td>
        </tr>)
    }

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Total Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map(renderCart)
                }
                </tbody>
            </table>

            <div className="total">
                Total: {total}$
            </div>
        </div>
    );
};

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}
const mapDispatchToProps = {
        onIncrease: productAddedToCart,
        onDecrease: productRemovedFromCart,

    }
;
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
