import {StyleSheet} from 'react-native';
import {primaryColor} from '../../values/colors';
import {screenHeight, screenWidth} from '../../values/screenSize';

export const styles = StyleSheet.create({
  container: {
    height: screenHeight - 35,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    color: primaryColor,
  },
  inputContainer: {
    rowGap: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 15,
  },
  dropdown: {
    height: screenHeight * 0.06,
    width: screenWidth * 0.2,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#E8E8E8',
    borderWidth: 2,
    padding: 12,
  },
  dropdownItem: {
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownTextItem: {
    flex: 1,
    fontWeight: 'bold',
    color: primaryColor,
  },
  input: {
    height: screenHeight * 0.06,
    width: screenWidth * 0.52,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E8E8E8',
    borderWidth: 2,
    color: primaryColor,
    fontWeight: 'bold',
  },
  btnDelete: {
    backgroundColor: 'transparent',
    marginStart: 10,
  },
  btnAddGuest: {
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#FF9F47',
  },
  btnSave: {
    position: 'absolute',
    margin: 20,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#FF9F47',
    bottom: 0,
    start: 0,
    end: 0,
  },
});
