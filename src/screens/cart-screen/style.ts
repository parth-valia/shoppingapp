import Colors from '@styles/colors';
import {Fonts} from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemSeparatorContainer: {
    backgroundColor: Colors.loblolly,
    padding: 0.4,
    marginHorizontal: 20,
  },
  priceTextConatiner: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 40,
    justifyContent: 'space-between',
  },
  checkoutContainer: {
    backgroundColor: Colors.loblolly,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 15,
    position: 'absolute',
    bottom: 30,
    width: '90%',
  },
  totalTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    color: Colors.dark_gray,
  },
  priceTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontWeight: '500',
  },
  totalpriceTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontWeight: '600',
  },
  checkoutButtonContainer: {
    padding: 20,
    paddingHorizontal: 50,
    borderRadius: 20,
    backgroundColor: Colors.blue,
    margin: 10,
    alignItems: 'center',
  },
  checkoutButtonTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontWeight: '600',
    color: Colors.white,
  },
});
