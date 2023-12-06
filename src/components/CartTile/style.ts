import Colors from '@styles/colors';
import {Fonts} from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-between',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  imageStyle: {height: 60, width: 60, borderRadius: 10},
  textContainer: {
    marginHorizontal: 20,
    width: 100,
  },
  titleTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontWeight: '500',
  },
  priceTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontWeight: '400',
    marginVertical: 5,
  },
  buttonContainer: {
    backgroundColor: Colors.mystic,
    padding: 10,
    width: 40,
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 15,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontWeight: '500',
  },
});
