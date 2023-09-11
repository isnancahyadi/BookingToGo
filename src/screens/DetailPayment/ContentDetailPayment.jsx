import {Image, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {PaymentContext} from '../../context/PaymentContext';
import {RadioButton, Surface, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {primaryColor} from '../../values/colors';
import {styles} from './contentStyle';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ContentDetailPayment = () => {
  const {setTitle, dataCustomer, dataGuests} = useContext(PaymentContext);
  const navigation = useNavigation();

  const {chosen_hotel} = useSelector(state => state?.reservation?.data);

  const [checked, setChecked] = useState(null);

  useEffect(() => setTitle('Payment Details'), []);

  const {
    chosen_hotel_detail,
    chosen_hotel_room,
    chosen_hotel_params,
    chosen_hotel_prices,
  } = chosen_hotel?.data?.get_chosen_hotel;

  const {check_in, check_out} = chosen_hotel_params;

  const dateCheckIn = new Date(check_in);
  const dateCheckOut = new Date(check_out);

  const reservationNight =
    (dateCheckOut.getTime() - dateCheckIn.getTime()) / (1000 * 3600 * 24);

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Text variant="titleMedium">Detail Pesanan</Text>

          <Surface mode="flat" style={[styles.card, styles.cardHotel]}>
            <View style={styles.cardBody}>
              <View style={styles.cardImage} resizeMode="cover">
                <Image
                  source={{uri: chosen_hotel_detail?.images[5]?.thumbnail}}
                  style={styles.image}
                />
              </View>

              <View style={styles.cardContent}>
                <Text variant="bodyLarge" style={styles.cardTitle}>
                  {chosen_hotel_detail?.hotel_name}
                </Text>
                <Text variant="bodySmall" style={styles.cardSubTitle}>
                  {chosen_hotel_room?.room_name}
                </Text>
                <Text variant="bodySmall" style={styles.cardSubTitle}>
                  {chosen_hotel_params?.total_room} Kamar {'\u25CF'} Double{' '}
                  {'\u25CF'} {reservationNight} Malam
                </Text>
              </View>
            </View>
          </Surface>

          <View style={styles.status}>
            <View style={styles.statusCheck}>
              <Text variant="titleMedium">Check-In</Text>
              <Text variant="titleSmall" style={{color: 'rgba(0, 0, 0, .5)'}}>
                {dateCheckIn.toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </Text>
            </View>

            <View style={styles.statusCheck}>
              <Text variant="titleMedium">Check-Out</Text>
              <Text variant="titleSmall" style={{color: 'rgba(0, 0, 0, .5)'}}>
                {dateCheckOut.toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </Text>
            </View>

            <View style={styles.statusNote}>
              <FontAwesome6
                solid
                name={
                  chosen_hotel_prices?.is_refundable
                    ? 'money-bill-transfer'
                    : 'sack-xmark'
                }
                size={19}
                color={
                  chosen_hotel_prices?.is_refundable ? '#FFBA7B' : '#FF7B7B'
                }
              />
              <Text
                variant="titleSmall"
                style={{
                  color: chosen_hotel_prices?.is_refundable
                    ? '#FFBA7B'
                    : '#FF7B7B',
                  fontWeight: 'bold',
                }}>
                {chosen_hotel_prices?.is_refundable
                  ? 'Dapat direfund jika dibatalkan'
                  : 'Tidak dapat direfund'}
              </Text>
            </View>
          </View>
        </View>

        <Surface mode="flat" style={styles.reserverContainer}>
          <Text variant="titleMedium">Detail Pemesan</Text>

          <Surface mode="flat" style={[styles.card, styles.cardReserver]}>
            <View
              style={[
                styles.cardBody,
                styles.cardBodyReserver,
                {marginHorizontal: 5},
              ]}>
              <View style={styles.cardContent}>
                <Text variant="titleMedium">
                  {dataCustomer?.data_customer?.gender === 'male'
                    ? 'Tn. '
                    : dataCustomer?.data_customer?.gender === 'female' &&
                      'Ny. '}
                  {dataCustomer?.data_customer?.name}
                </Text>
                <Text variant="bodyMedium" style={styles.cardSubTitle}>
                  {dataCustomer?.data_customer?.email}
                </Text>
                <Text variant="bodyMedium" style={styles.cardSubTitle}>
                  {dataCustomer?.data_customer?.phone_num}
                </Text>
              </View>
              <Text variant="titleMedium" style={styles.textLink}>
                Ubah
              </Text>
            </View>
          </Surface>

          <RadioButton.Group
            onValueChange={newChecked => setChecked(newChecked)}
            value={checked ?? dataCustomer?.reservation_type}>
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
            {dataGuests?.map((item, index) => (
              <Surface
                key={index}
                mode="flat"
                style={[styles.card, styles.cardPerson]}>
                <View style={styles.cardBody}>
                  <FontAwesome6 solid name="user" size={24} color={'#000000'} />
                  <Text variant="titleMedium">
                    {item?.gender === 'male'
                      ? 'Tn. '
                      : item?.gender === 'female' && 'Ny. '}
                    {item?.name}
                  </Text>
                </View>
              </Surface>
            ))}
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginVertical: 20,
            }}>
            <Pressable onPress={() => navigation.navigate('AddGuests')}>
              <Text variant="titleMedium" style={styles.textLink}>
                Ubah Data Tamu
              </Text>
            </Pressable>
          </View>
        </Surface>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ContentDetailPayment;
