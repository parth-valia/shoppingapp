import Colors from '@styles/colors';
import {Fonts} from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  subTitleTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontWeight: '300',
    fontSize: 50,
  },
  titleTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontWeight: '800',
    fontSize: 50,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  ratingTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    color: Colors.nevada,
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  priceTextStyle: {
    fontFamily: Fonts.MANROPE_BOLD,
    fontSize: 16,
    color: Colors.blue,
  },
  discountContainer: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: Colors.blue,
    marginLeft: 15,
  },
  discountTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontSize: 12,
    color: Colors.white,
  },
  buttonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  addToCartContainer: {
    borderWidth: 1,
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
    borderColor: Colors.blue,
  },
  addToCartTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontWeight: '600',
    color: Colors.blue,
  },
  buyNowContainer: {
    padding: 20,
    paddingHorizontal: 50,
    borderRadius: 20,
    backgroundColor: Colors.blue,
  },
  buyNowTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontWeight: '600',
    color: Colors.white,
  },
  DetailsContainer: {marginHorizontal: 20, marginVertical: 10},
  DetailsTitleTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontSize: 16,
  },
  DetailsTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontSize: 16,
    color: Colors.nevada,
    marginVertical: 10,
  },
  favouriteContainer: {position: 'absolute', zIndex: 20, top: 25, right: 25},
});
