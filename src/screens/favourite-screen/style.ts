import {Fonts} from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  productTitleTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontWeight: '400',
    fontSize: 30,
    marginBottom: 10,
  },
  productContainer: {marginHorizontal: 12, marginVertical: 20},
  productListContainer: {
    alignItems: 'flex-start',
  },
});
