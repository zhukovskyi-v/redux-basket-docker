export const pageLoaded =() => {
    return {type: 'PAGE_LOADED'}
}
const productsRequested = () => {
    return {
        type: 'FETCH_PRODUCTS_REQUEST',
    };
};
const productsLoaded = (newItems) => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: newItems
    };
};
const productsError = (error) => {
    return {
        type: 'FETCH_PRODUCTS_FAILURE',
        payload: error
    };
};

export const productAddedToCart = (ID) => {
    return {
        type: 'PRODUCT_ADDED_TO_CART',
        payload: ID
    };
};
export const productRemovedFromCart = (ID) => {
    return {
        type: 'PRODUCT_REMOVED_FROM_CART',
        payload: ID
    }
}

export const fetchProducts = (bookStoreService, dispatch) => () => {
    dispatch(productsRequested())
    bookStoreService.getData().then((data) => {
        dispatch(productsLoaded(data))
    }).catch((err) => {
        dispatch(productsError(err))
    })
}

