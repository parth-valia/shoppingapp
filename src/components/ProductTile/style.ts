import Colors from '@styles/colors';
import {Fonts} from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mystic,
    paddingBottom: 10,
    margin: 6,
    borderRadius: 20,
  },
  imageStyle: {
    height: 160,
    width: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  detailsContainer: {marginHorizontal: 10},
  priceTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  productTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontWeight: '400',
    fontSize: 12,
    color: Colors.nevada,
    marginBottom: 5,
    width: 150,
  },
  addToCartContainer: {
    backgroundColor: Colors.dark_blue,
    borderRadius: 20,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 10,
    right: 5,
  },
  favouriteContainer: {position: 'absolute', zIndex: 20, top: 15, left: 15},
});
