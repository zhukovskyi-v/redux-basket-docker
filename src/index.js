import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundry';
import ProductStoreService from './services/productstore-service';
import {ProductStoreServiceProvider} from './bookstore-service-context';
import store from './store';
import App from "./components/App/App";

const productStoreService = new ProductStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ProductStoreServiceProvider value={productStoreService}>
                <Router>
                    <App/>
                </Router>
            </ProductStoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);