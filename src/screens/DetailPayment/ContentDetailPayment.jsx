import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {PaymentContext} from '../../context/PaymentContext';
import {RadioButton, Surface, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {primaryColor} from '../../values/colors';
import {screenWidth} from '../../values/screenSize';

const ContentDetailPayment = () => {
  const {setTitle} = useContext(PaymentContext);
  const [checked, setChecked] = useState('first');

  useEffect(() => setTitle('Payment Details'), []);

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Text variant="titleMedium">Detail Pesanan</Text>

          <Surface mode="flat" style={[styles.card, styles.cardHotel]}>
            <View style={styles.cardBody}>
              <View style={styles.cardImage} resizeMode="cover">
                <Image
                  source={require('../../assets/img/room.jpg')}
                  style={styles.image}
                />
              </View>

              <View style={styles.cardContent}>
                <Text variant="bodyLarge" style={styles.cardTitle}>
                  Novotel Tangerang
                </Text>
                <Text variant="bodySmall" style={styles.cardSubTitle}>
                  Executive Suit Room with Breakfast
                </Text>
                <Text variant="bodySmall" style={styles.cardSubTitle}>
                  1 Kamar {'\u25CF'} Quardruple {'\u25CF'} 10 Malam
                </Text>
              </View>
            </View>
          </Surface>

          <View style={styles.status}>
            <View style={styles.statusCheck}>
              <Text variant="titleMedium">Check-In</Text>
              <Text variant="titleSmall" style={{color: 'rgba(0, 0, 0, .5)'}}>
                30 November 2020
              </Text>
            </View>

            <View style={styles.statusCheck}>
              <Text variant="titleMedium">Check-Out</Text>
              <Text variant="titleSmall" style={{color: 'rgba(0, 0, 0, .5)'}}>
                14 Desember 2020
              </Text>
            </View>

            <View style={styles.statusNote}>
              <FontAwesome6
                solid
                name="money-bill-transfer"
                size={19}
                color={'#FFBA7B'}
              />
              <Text
                variant="titleSmall"
                style={{color: '#FFBA7B', fontWeight: 'bold'}}>
                Dapat direfund jika dibatalkan
              </Text>
            </View>
          </View>
        </View>

        <Surface mode="flat" style={styles.reserverContainer}>
          <Text variant="titleMedium">Detail Pesanan</Text>

          <Surface mode="flat" style={[styles.card, styles.cardReserver]}>
            <View
              style={[
                styles.cardBody,
                styles.cardBodyReserver,
                {marginHorizontal: 5},
              ]}>
              <View style={styles.cardContent}>
                <Text variant="titleMedium">Tn. Andreas Andreas</Text>
                <Text variant="bodyMedium" style={styles.cardSubTitle}>
                  andreasandreas@gmail.com
                </Text>
                <Text variant="bodyMedium" style={styles.cardSubTitle}>
                  +628 22 2222 2222
                </Text>
              </View>
              <Text variant="titleMedium" style={styles.textLink}>
                Ubah
              </Text>
            </View>
          </Surface>

          <RadioButton.Group
            onValueChange={newChecked => setChecked(newChecked)}
            value={checked}>
            <View style={styles.radio}>
              <RadioButton value="self" color={primaryColor} />
              <Text variant="bodyMedium">Saya memesan untuk sendiri</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton value="other" color={primaryColor} />
              <Text variant="bodyMedium">Saya memesan untuk orang lain</Text>
            </View>
          </RadioButton.Group>

          <Text variant="titleMedium" style={{marginVertical: 15}}>
            Data Tamu
          </Text>
          <View style={styles.listPerson}>
            <Surface mode="flat" style={[styles.card, styles.cardPerson]}>
              <View style={styles.cardBody}>
                <FontAwesome6 solid name="user" size={24} color={'#000000'} />
                <Text variant="titleMedium">Tn. John Doe</Text>
              </View>
            </Surface>
            <Surface mode="flat" style={[styles.card, styles.cardPerson]}>
              <View style={styles.cardBody}>
                <FontAwesome6 solid name="user" size={24} color={'#000000'} />
                <Text variant="titleMedium">Ny. Johny Doe Doe</Text>
              </View>
            </Surface>
            <Surface mode="flat" style={[styles.card, styles.cardPerson]}>
              <View style={styles.cardBody}>
                <FontAwesome6 solid name="user" size={24} color={'#000000'} />
                <Text variant="titleMedium">Ny. Johny Doe Doe</Text>
              </View>
            </Surface>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginVertical: 20,
            }}>
            <Text variant="titleMedium" style={styles.textLink}>
              Ubah Data Tamu
            </Text>
          </View>
        </Surface>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ContentDetailPayment;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderColor: '#E8E8E8',
    borderRadius: 10,
    justifyContent: 'center',
  },
  cardHotel: {
    marginVertical: 15,
    borderWidth: 2,
  },
  cardImage: {
    width: screenWidth * 0.17,
    height: screenWidth * 0.17,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
  },
  cardContent: {
    flexDirection: 'column',
    flexShrink: 1,
    rowGap: 3,
  },
  cardTitle: {
    color: primaryColor,
    fontWeight: 'bold',
  },
  cardSubTitle: {
    color: 'rgba(0, 0, 0, .5)',
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  status: {
    flexDirection: 'column',
    rowGap: 15,
  },
  statusCheck: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusNote: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  reserverContainer: {
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },
  cardReserver: {
    marginVertical: 15,
    borderWidth: 0.5,
  },
  cardBodyReserver: {
    justifyContent: 'space-between',
  },
  cardPerson: {
    borderWidth: 0.5,
  },
  textLink: {
    textDecorationLine: 'underline',
    color: primaryColor,
  },
  radio: {
    columnGap: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listPerson: {
    flexDirection: 'column',
    rowGap: 15,
  },
});
