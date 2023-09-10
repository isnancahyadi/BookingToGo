import {StyleSheet} from 'react-native';
import React from 'react';
import {PaymentProvider} from '../../context/PaymentContext';
import ContentAddGuests from './ContentAddGuests';

const AddGuests = () => {
  return (
    <PaymentProvider>
      <ContentAddGuests />
    </PaymentProvider>
  );
};

export default AddGuests;

const styles = StyleSheet.create({});
