import React from 'react';
import './product-list-item.css';
import {NavLink} from "react-router-dom";

const ProductListItem = ({product, onAddItemToCart}) => {
    const {name, label, price} = product;
    return (
        <div className="product-list-item">

            <div className="product-details">
                <NavLink to="/" className="product-name">{name}</NavLink>
                <p className="product-label">{label}</p>
                <p className="product-price">${price}</p>
                <button onClick={onAddItemToCart} className="btn btn-info add-to-cart">Add to cart</button>
            </div>

        </div>
    );
};

export default ProductListItem;
