import {BackHandler, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {Surface, Text} from 'react-native-paper';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {primaryColor} from '../../values/colors';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Pressable
        onPress={() =>
          navigation.canGoBack() ? navigation.goBack() : BackHandler.exitApp()
        }
        style={styles.backButton}>
        <Surface mode="flat" style={{backgroundColor: 'transparent'}}>
          <FontAwesome6 solid name={'arrow-left'} size={26} color={'#FFFFFF'} />
        </Surface>
      </Pressable>
      <Text variant="titleMedium" style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  backButton: {
    position: 'absolute',
    marginHorizontal: 15,
    start: 0,
  },
  title: {
    color: '#FFFFFF',
  },
});
