import {View, TextInput, ScrollView, Pressable} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {PaymentContext} from '../../context/PaymentContext';
import {screenHeight} from '../../values/screenSize';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Surface, Text} from 'react-native-paper';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Dropdown} from 'react-native-element-dropdown';
import {styles} from './contentStyle';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {updateDataGuest} from '../../store/reducers/customerSlice';

const data = [
  {label: 'Mr', value: 'male'},
  {label: 'Mrs', value: 'female'},
];

const ContentAddGuests = () => {
  const {setTitle, dataGuests, setDataGuests} = useContext(PaymentContext);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => setTitle('Tambah Data Tamu'), []);

  const renderItem = item => {
    return (
      <View style={styles.dropdownItem}>
        <Text style={styles.dropdownTextItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text variant="titleMedium" style={[styles.title, styles.text]}>
          Data Tamu
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{maxHeight: screenHeight - 225, marginVertical: 15}}>
          <SafeAreaView>
            <View style={styles.inputContainer}>
              {dataGuests?.map((item, index) => (
                <View key={index} style={styles.inputContent}>
                  <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.dropdownTextItem}
                    selectedTextStyle={styles.dropdownTextItem}
                    data={data}
                    labelField="label"
                    valueField="value"
                    placeholder="..."
                    value={item?.gender}
                    onChange={gender => {
                      setDataGuests(
                        dataGuests.map(guest =>
                          guest?.id === item?.id
                            ? {...guest, gender: gender?.value}
                            : guest,
                        ),
                      );
                    }}
                    renderItem={renderItem}
                  />
                  <TextInput
                    placeholder={'Guest name'}
                    value={item?.name}
                    onChangeText={name =>
                      setDataGuests(
                        dataGuests.map(guest =>
                          guest?.id === item?.id
                            ? {...guest, name: name}
                            : guest,
                        ),
                      )
                    }
                    style={styles.input}
                  />
                  <Pressable
                    onPress={() =>
                      setDataGuests(prevGuest =>
                        prevGuest.filter((_, key) => key !== index),
                      )
                    }>
                    <Surface mode="flat" style={styles.btnDelete}>
                      <FontAwesome6
                        regular
                        name="trash-can"
                        size={32}
                        color={'#FF6363'}
                      />
                    </Surface>
                  </Pressable>
                </View>
              ))}
            </View>
          </SafeAreaView>
        </ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.btnAddGuest}>
            <FontAwesome6 solid name="plus" size={12} color={'#FF9F47'} />
            <Text
              variant="titleSmall"
              style={{color: '#FF9F47', fontWeight: 'bold'}}>
              Tambah Data Tamu
            </Text>
          </View>
        </View>
      </SafeAreaView>

      <Button
        mode="contained"
        onPress={() => {
          dispatch(updateDataGuest(dataGuests));
          navigation.navigate('DetailPayment');
        }}
        style={styles.btnSave}>
        <Text
          variant="titleMedium"
          style={{color: '#FFFFFF', fontWeight: 'bold'}}>
          Simpan
        </Text>
      </Button>
    </View>
  );
};

export default ContentAddGuests;
