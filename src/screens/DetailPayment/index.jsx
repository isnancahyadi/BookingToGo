import {StyleSheet, View} from 'react-native';
import React from 'react';
import {PaymentProvider} from '../../context/PaymentContext';
import ContentDetailPayment from './ContentDetailPayment';
import {Avatar, Surface, Text} from 'react-native-paper';
import {primaryColor, primaryColorTransparent} from '../../values/colors';

const DetailPayment = () => {
  return (
    <PaymentProvider>
      <Surface style={styles.stepContainer}>
        <View style={styles.step}>
          <View style={[styles.step, {columnGap: 5}]}>
            <Avatar.Text
              size={26}
              label="1"
              color="rgba(255, 255, 255, 1)"
              labelStyle={styles.label}
              style={styles.labelActiveContainer}
            />
            <Text variant="labelLarge" style={styles.textActive}>
              Detail Pesanan
            </Text>
          </View>

          <View style={[styles.lineActive, styles.line]} />

          <View style={[styles.step, {columnGap: 5}]}>
            <Avatar.Text
              size={26}
              label="2"
              color="rgba(255, 255, 255, .5)"
              labelStyle={styles.label}
              style={styles.labelContainer}
            />
            <Text variant="labelLarge" style={styles.text}>
              Pembayaran
            </Text>
          </View>

          <View style={[styles.lineInActive, styles.line]} />

          <View style={[styles.step, {columnGap: 5}]}>
            <Avatar.Text
              size={26}
              label="3"
              color="rgba(255, 255, 255, .5)"
              labelStyle={styles.label}
              style={styles.labelContainer}
            />
            <Text variant="labelLarge" style={styles.text}>
              Checkout
            </Text>
          </View>
        </View>
      </Surface>
      <ContentDetailPayment />
    </PaymentProvider>
  );
};

export default DetailPayment;

const styles = StyleSheet.create({
  stepContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
  },
  labelContainer: {
    backgroundColor: primaryColorTransparent,
  },
  labelActiveContainer: {
    backgroundColor: primaryColor,
  },
  line: {
    flex: 1,
    height: 3.25,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  lineInActive: {
    backgroundColor: primaryColorTransparent,
  },
  lineActive: {
    backgroundColor: primaryColor,
  },
  text: {
    color: 'rgba(0, 0, 0, .5)',
  },
  textActive: {
    color: 'rgba(0, 0, 0, 1)',
  },
});
