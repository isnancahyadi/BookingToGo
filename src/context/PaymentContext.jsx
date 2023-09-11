import React, {createContext, useState, useEffect} from 'react';
import {Header} from '../components';

import {useDispatch, useSelector} from 'react-redux';
import {getReservation} from '../store/reducers/reservationSlice';

export const PaymentContext = createContext();

export const PaymentProvider = ({children}) => {
  const dispatch = useDispatch();
  const customer = useSelector(state => state?.customer?.value);

  const [title, setTitle] = useState('');
  const [dataCustomer, setDataCustomer] = useState(null);
  const [dataGuests, setDataGuests] = useState(null);

  useEffect(() => {
    dispatch(getReservation());
  }, []);

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
