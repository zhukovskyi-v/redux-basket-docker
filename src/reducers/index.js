const initialState = {
    products: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
};

const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};
const updateCartItem = (product, item = {}, quantity) => {
    const {
        id = product.id,
        count = 0,
        name = product.name,
        total = 0
    } = item;

    return {
        id,
        name: name,
        count: count + quantity,
        total: total + quantity * product.price
    };
};
const updateOrder = (state, elemId, quantity, totalPrice = 0) => {
    const {products, cartItems} = state
    const product = products.find(({id}) => id === elemId);
    const itemIndex = cartItems.findIndex(({id}) => id === elemId);
    const item = cartItems[itemIndex];
    const newItem = updateCartItem(product, item, quantity);
    const newState = {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotal: state.orderTotal + totalPrice
    }
    localStorage.setItem('basket', JSON.stringify(newState))
    return newState
}
const getLocalDataToState = () => {
    const data = localStorage.getItem('basket')
    if (data) {
        return JSON.parse(data)
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'PAGE_LOADED':
            return getLocalDataToState(state)
        case 'FETCH_PRODUCTS_REQUEST':
            return {
                ...state,
                products: [],
                loading: true,
                error: null
            };
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_PRODUCTS_FAILURE':
            return {
                ...state,
                products: [],
                loading: false,
                error: action.payload
            };

        case 'PRODUCT_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1, state.products[action.payload - 1].price)
        case 'PRODUCT_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1, -state.products[action.payload - 1].price);
        default:
            return state;
    }
};

export default reducer;
