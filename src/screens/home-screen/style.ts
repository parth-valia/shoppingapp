import Colors from '@styles/colors';
import {Fonts} from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: Colors.blue,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingBottom: 5,
  },
  titleTextStyle: {
    color: Colors.white,
    fontFamily: 'Manrope-Bold',
    fontSize: 22,
    fontWeight: '600',
  },
  cartItemContainer: {
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    paddingHorizontal: 4,
    zIndex: 20,
    right: -5,
    top: -5,
  },
  cartItemTextStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.white,
  },
  dropDownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  dropDownAddressMainContainer: {
    position: 'absolute',
    zIndex: 50,
    top: 220,
    marginHorizontal: 10,
    shadowColor: Colors.dark_blue,
    shadowOpacity: 0.2,
    width: 175,
  },
  dropDownDeliveryMainContainer: {
    position: 'absolute',
    zIndex: 50,
    top: 220,
    right: 10,
    marginHorizontal: 10,
    shadowColor: Colors.dark_blue,
    shadowOpacity: 0.2,
    width: 70,
  },
  dropDownListContainer: {
    borderRadius: 5,
  },
  itemSeparatorContainer: {backgroundColor: Colors.hit_gray, padding: 0.6},
  itemContainer: {
    backgroundColor: Colors.white,
    padding: 10,
  },
  itemTextStyle: {fontFamily: Fonts.MANROPE_REGULAR},
  mainContainer: {marginVertical: 25, flex: 1},
  productTitleTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    fontWeight: '400',
    fontSize: 30,
  },
  productContainer: {marginHorizontal: 20, marginVertical: 20},
  productListContainer: {
    alignItems: 'center',
  },
});
