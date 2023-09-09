import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Surface, Text} from 'react-native-paper';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {primaryColor} from '../../values/colors';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Surface mode="flat" style={styles.backButton}>
        <FontAwesome6 solid name={'arrow-left'} size={26} color={'#FFFFFF'} />
      </Surface>
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
    backgroundColor: 'transparent',
    marginHorizontal: 15,
    start: 0,
  },
  title: {
    color: '#FFFFFF',
  },
});
