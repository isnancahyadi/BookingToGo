import {View, Text} from 'react-native';
import React, {createContext, useState} from 'react';
import {Header} from '../components';

export const PaymentContext = createContext();

export const PaymentProvider = ({children}) => {
  const [title, setTitle] = useState('');

  return (
    <>
      <Header title={title} />
      <PaymentContext.Provider value={{setTitle}}>
        {children}
      </PaymentContext.Provider>
    </>
  );
};
