import React from 'react';
import './header.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Header = ({orderTotal}) => {
    return (
        <header className="shop-header row">
            <nav>
                <ul className='header-list d-flex justify-content-between align-items-center'>
                    <li>
                        <NavLink to="/" className="header-link shopping-cart logo text-dark">ReStore</NavLink>
                    </li>
                    <li>
                        <NavLink to='/basket' className="header-link shopping-cart">
                            <i className="cart-icon fa fa-shopping-cart"/>
                            ${orderTotal}
                        </NavLink>
                    </li>
                </ul>
            </nav>


        </header>
    );
};
const mapStateToProps = ({orderTotal}) => {
    return {
        orderTotal
    }
}
export default connect(mapStateToProps)(Header);
