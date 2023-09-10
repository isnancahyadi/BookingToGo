import {StyleSheet} from 'react-native';
import {screenWidth} from '../../values/screenSize';
import {primaryColor} from '../../values/colors';

export const styles = StyleSheet.create({
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
