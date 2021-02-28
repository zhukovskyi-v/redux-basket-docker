import React from 'react';
import {ProductStoreServiceConsumer} from '../bookstore-service-context';

const withProductStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <ProductStoreServiceConsumer>
                {
                    (productStoreService) => {
                        return (<Wrapped {...props}
                                         productStoreService={productStoreService}/>);
                    }
                }
            </ProductStoreServiceConsumer>
        );
    }
};

export default withProductStoreService;
