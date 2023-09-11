import React, {createContext, useState, useEffect} from 'react';
import {Header} from '../components';

import {useSelector} from 'react-redux';

export const PaymentContext = createContext();

export const PaymentProvider = ({children}) => {
  const customer = useSelector(state => state?.customer?.value);

  const [title, setTitle] = useState('');
  const [dataCustomer, setDataCustomer] = useState(null);
  const [dataGuests, setDataGuests] = useState(null);

  useEffect(() => {
    setDataCustomer(customer);
    setDataGuests(customer?.guests_data);
  }, [customer]);

  return (
    <>
      <Header title={title} />
      <PaymentContext.Provider
        value={{setTitle, dataCustomer, dataGuests, setDataGuests}}>
        {children}
      </PaymentContext.Provider>
    </>
  );
};
