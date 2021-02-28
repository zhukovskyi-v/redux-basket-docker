import React from 'react';

const {
  Provider: ProductStoreServiceProvider,
  Consumer: ProductStoreServiceConsumer
} = React.createContext();

export {
  ProductStoreServiceProvider,
  ProductStoreServiceConsumer
};
