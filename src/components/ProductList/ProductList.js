import React, {Component} from 'react';
import ProductListItem from '../ProductListItem';
import {connect} from 'react-redux';
import {withProductsStoreService} from '../../hoc';
import {productAddedToCart, fetchProducts} from '../../actions';
import {compose} from '../../utils';
import './product-list.css';
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

const ProductList = ({products, onAddItemToCart}) => {
    if (products) {
        return (
            <ul className="product-list">
                {
                    products.map((product) => {
                        return (
                            <li key={product.id}>
                                <ProductListItem product={product} onAddItemToCart={() => onAddItemToCart(product.id)}/>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

class ProductListContainer extends Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        const {products, loading, error, onAddItemToCart} = this.props;
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            console.log(error)
            return <ErrorIndicator/>
        }
        return <ProductList products={products} onAddItemToCart={onAddItemToCart}/>
    }
}

const mapStateToProps = ({products, loading, error}) => {
    return {products, loading, error};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProducts: fetchProducts(ownProps.productStoreService, dispatch),
        onAddItemToCart: (id) => dispatch(productAddedToCart(id))
    }
};

export default compose(
    withProductsStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductListContainer);

